import { useParams } from "react-router";

function Post ({data,deletePost}){
  const {id} = useParams();

  const detail = data.find(d=>d.id === Number(id))
  if(!detail) return <div>글이 없습니다.</div>;

  return(
    <div>
      <h2>{detail.title}</h2>
      <p>{detail.createdAt}</p>
      <p>{detail.content}</p>
      <button>수정하기</button>
      <button onClick={()=> deletePost(detail.id)}>삭제하기</button>
    </div>
  )
}
export default Post;