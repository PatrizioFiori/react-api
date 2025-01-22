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
  )
}

export default Posts