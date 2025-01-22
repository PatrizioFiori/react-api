import PostsCard from "./PostsCard"
import axios from "axios"
import { useState, useEffect } from "react"

const Posts = () => {

  const initialFormData = {
    title: "",
    content: "",
    image: "",
    tags: []

  }

  const baseApiUrl = "http://localhost:3000"
  const [posts, setPosts] = useState([])
  const [formData, setFormData] = useState(initialFormData)

  const handlerInputChange = (e) => {
    //console.log(e.target)
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value

    }))
  }

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
        //console.log(JSON.stringify(posts, null, 2));
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handlerDeletePost = (id => {
    //console.log(id)
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        fetchPosts()
        //setPosts((prevPosts) => prevPosts.filter(post => post.id !== id))
      })
      .catch(error => {
        console.log(error)
      })
  })
  /*
    const handleAddPost = (e) => {
      e.preventDefault();
      const tagsArray = formData.tags.split(",").map(item => item.trim());
      const newPost = { ...formData, tags: tagsArray };
  
      axios.post(`${baseApiUrl}/posts`, newPost)
        .then(res => {
          setPosts(prevPosts => [...prevPosts, res.data]);
          setFormData(initialFormData);
        })
        .catch(error => {
          console.error("Errore durante l'invio del post:", error);
        });
    };
    */


  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center mb-5">
          Gestione posts
        </h1>
        <div className="row bg-light">
          {posts.map(post => {
            return (
              <PostsCard key={post.id} post={post} onDelete={() => handlerDeletePost(post.id)} />
            )
          })}
        </div>
      </div>
      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="card-title">
              <h2>New post</h2>
            </div>
            <div className="mb-3">
              <label htmlFor="title">Nome post</label>
              <input
                type="text"
                name="title"
                id="title"
                className="form-control"
                placeholder="nome post"
                onChange={handlerInputChange}
                value={formData.title}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="image">Url img</label>
              <input
                type="text"
                name="image"
                id="image"
                className="form-control"
                placeholder="Url img"
                onChange={handlerInputChange}
                value={formData.image}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="tags">Tags</label>
              <input
                type="text"
                name="tags"
                id="tags"
                className="form-control"
                placeholder="tags"
                onChange={handlerInputChange}
                value={formData.tags}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="content">Content</label>
              <input
                type="text"
                name="content"
                id="content"
                className="form-control"
                placeholder="content"
                onChange={handlerInputChange}
                value={formData.content}
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit"
              //onClick={handleAddPost}
              >Pubblica nuovo post</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Posts