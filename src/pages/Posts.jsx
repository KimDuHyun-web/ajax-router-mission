import { Link } from "react-router";

function Posts({data}){
  const lists = data
  return(
    <div>
      <h2>글 목록</h2>
  
      {lists.map(list=>(
          <ul key={list.id}>
            <li><Link to={`/posts/${list.id}`}>{list.title}</Link>
            <p>{list.createdAt}</p>
            </li>
          </ul>
      ))}
    </div>
  )
}
export default Posts;