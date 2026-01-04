import { useEffect, useState } from 'react'
import { data, Route, Routes } from 'react-router'
import './App.css'
import Header from './components/Header'
import Home from './pages/Home'
import Posts from './pages/Posts'
import Post from './pages/post'

function App() {
  const [list, setList] = useState([]);
  console.log(list);
  useEffect(()=>{
    fetch('/data/blog.json')
    .then(res=>res.json())
    .then(data=>{setList(data);})
  }, [])

  const deletePost = (id)=>{
    if(window.confirm('정말 삭제할까요?')){
      setList(prev => prev.filter(post => post.id !==id ));
    }else{
      alert('취소되었습니다!');
    }
  };

  return (
    <>
      <Header/>
      <hr />
      <Routes>
        <Route path="/" element={<Home data={list}/>}/>
        <Route path="/Posts" element={<Posts data={list}/>}/>
        <Route path="/Posts/:id" element={<Post 
        data={list} 
        deletePost={deletePost}/>}/>
      </Routes>
    </>
  )
}

export default App
