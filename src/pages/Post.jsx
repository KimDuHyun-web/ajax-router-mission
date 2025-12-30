import { useParams } from "react-router";

function Post({data}){
  const {id}= useParams()
  const post = data.find(item => item.id === Number(id))

  if(!post){
    return <p>글이 없습니다.</p>
  }
  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.createdAt}</p>
      <div>
        <button>수정하기</button>
        <button>삭제하기</button>
      </div>
    </div>
  )
}
export default Post;