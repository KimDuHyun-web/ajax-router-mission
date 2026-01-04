import { Link } from "react-router";

function Home({data}){
  const newPost = data.slice(0, 3)

  return(
    <div>
      <h2>소개</h2>
      <p>React Router로 목록/상세/작성/수정/삭제를 연습하는 미션입니다.</p>
      
      <h2>최신 글</h2>
  
      {newPost.map(post=>(
          <ul key={post.id}>
            <li><Link to={`/posts/${post.id}`}>{post.title}</Link>
            <p>{post.createdAt}</p>
            </li>
          </ul>
      ))}
    </div>
  )
}
export default Home;