import { Route, Routes } from 'react-router'
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './pages/home'
import Post from './pages/post'
import Posts from './pages/posts'

function App() {
  const [list, setList] = useState([]);

  useEffect(()=>{
    fetch('/data/blog.json')
    .then(res=>res.json())
    .then(data=>setList(data))
  }, [])

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home data={list}/>}/>
        <Route path="/posts" element={<Posts data={list}/>}/>
        <Route path="/posts/:id" element={<Post data={list}/>}/>
      </Routes>
    </>
  )
}

export default App
