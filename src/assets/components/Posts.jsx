import PostsCard from "./PostsCard"
import axios from "axios"
import { useState, useEffect } from "react"

const Posts = () => {

  const baseApiUrl = "http://localhost:3000"
  const [posts, setPosts] = useState([])

  const fetchPosts = () => {
    axios.get(`${baseApiUrl}/posts`)
      .then(res => {
        setPosts(res.data)
        console.log(JSON.stringify(posts, null, 2));
      })
      .catch(error => {
        console.log(error);
      })
  }

  const handlerDeletePost = (id => {
    console.log(id)
    axios.delete(`${baseApiUrl}/posts/${id}`)
      .then(res => {
        fetchPosts()
        //setPosts((prevPosts) => prevPosts.filter(post => post.id !== id))
      })
      .catch(error => {
        console.log(error)
      })
  })

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
              <label htmlFor="name">Nome post</label>
              <input
                type="text"
                name="name"
                id="name"
                className="form-control"
                placeholder="nome post"
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
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" type="submit">Pubblica nuovo post</button>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Posts