import PostsCard from "./PostsCard"

const Posts = () => {
  return (
    <div>
      <div className="container my-5">
        <h1 className="text-center mb-5">
          Gestione posts
        </h1>
        <div className="row">
          <PostsCard />
          <PostsCard />
          <PostsCard />
          <PostsCard />


        </div>
      </div>
    </div>
  )
}

export default Posts