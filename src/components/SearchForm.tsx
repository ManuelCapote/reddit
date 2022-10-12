import { FormEvent, useState } from 'react'
import './SearchForm.css'

interface Props {
  onFormSubmit: (searchTerm: string) => void
}

const SearchForm = ({ onFormSubmit }: Props) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault()
    onFormSubmit(searchTerm)
  }

  return (
    <div className='SearchForm'>
      <form action='' onSubmit={(e) => handleFormSubmit(e)}>
        <label htmlFor='searchSubreddit'>Search Subreddit</label>
        <input
          type='text'
          id='searchSubreddit'
          name='searchSubreddit'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type='submit'>search</button>
      </form>
    </div>
  )
}

export default SearchForm
