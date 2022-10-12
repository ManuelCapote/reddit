import { useState } from 'react'
import './ResultList.css'
import Result from './Result'
import Post from '../models/Post'

interface Props {
  posts: Post[]
}

const ResultList = ({ posts }: Props) => {
  console.log('posts', posts)
  return (
    <div className='ResultList'>
      <ul>
        {posts.map((post) => {
          return <Result post={post} key={post.data.id} />
        })}
      </ul>
    </div>
  )
}

export default ResultList
