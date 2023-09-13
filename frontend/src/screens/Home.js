import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useSelector } from 'react-redux'

export default function Home() {
  console.log(useSelector((state) => state.auth.userDetails))
  return (<div>
    <div><Navbar /></div>
    <div>Body</div>
    <div><Footer /></div>
  </div>
  )
}
