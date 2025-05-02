import { useState, useEffect } from 'react'
import { List, Create, Search, Loader } from '@components'
import { useGetPostsQuery } from '@services/api'
import './app.css'

function App() {
  const { data: posts = [], isLoading } = useGetPostsQuery()
  const [filteredPosts, setFilteredPosts] = useState(posts)

  useEffect(() => {
    setFilteredPosts(posts)
  }, [posts])

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <div className="max-w-5xl mx-auto pt-28 p-8 flex flex-col gap-4">
        <Search onSearch={setFilteredPosts} />
        {isLoading && <Loader />}
        {!isLoading && <List filteredPosts={filteredPosts} allPosts={posts} />}
        <Create />
      </div>
    </div>
  )
}

export default App
