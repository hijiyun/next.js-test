import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import Header from '../components/Header'

const Home: NextPage = () => {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Header />
      <h1>
        hello {count}
        <button onClick={()=>{setCount(count+1)}}>+</button>
      </h1>
    </div>
  )
}

export default Home
