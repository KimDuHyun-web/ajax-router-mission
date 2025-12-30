import { useParams } from "react-router";

function Home({data}){
  const newPost = data.slice(0, 3)

  return (
    <div>
      <h2>최신 글</h2>

      {newPost.map(post=>(
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.createdAt}</p>
        </div>
      ))}
    </div>
  )
}
export default Home;