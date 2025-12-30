import { Link } from "react-router";

const posts = ({data})=>{
  return (
    <div>
      <h2>글 목록</h2>
      <ul>
        {data.map(post=>(
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default posts;