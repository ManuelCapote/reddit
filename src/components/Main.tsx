import { useEffect, useState } from 'react'
import Post from '../models/Post'
import { getSubrredit } from '../services/SubRedditService'
import './Main.css'
import ResultList from './ResultList'
import SearchForm from './SearchForm'

const Main = () => {
  const [posts, setPosts] = useState<Post[]>([])
  const [searchTerm, setSearchTerm] = useState('aww')

  useEffect(() => {
    getSubrredit(`https://www.reddit.com/r/${searchTerm}/.json`).then(
      (response) => {
        setPosts(response.data.children)
      }
    )
  }, [searchTerm])

  const onFormSubmit = (term: string) => {
    setSearchTerm(term)
  }

  return (
    <div className='Main'>
      <SearchForm onFormSubmit={onFormSubmit} />
      <ResultList posts={posts} />
    </div>
  )
}

export default Main
