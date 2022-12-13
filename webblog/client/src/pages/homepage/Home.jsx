import { useEffect, useState } from 'react'
import Posts from '../../components/posts/Posts'
import './home.css'
import axios from "axios"
import { useLocation } from 'react-router-dom'
import Header from '../../components/header/Header'

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();


  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts"+search)
      setPosts(res.data)
    }
    fetchPosts()
  },[search])
  return (
    <div className='homepage'>
      <div className='header'>
        <Header />
          <div className='home'>
            <Posts posts={posts} />
          </div>
        </div>
    </div>
  )
}
