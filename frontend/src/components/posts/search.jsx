import { useState } from 'react'
import { Input, Button } from '@components'
import { useGetPostsQuery } from '@services/api'

function Search({ onSearch }) {
  const [search, setSearch] = useState('')
  const [isSearching, setIsSearching] = useState(false)
  const { data: posts, isLoading } = useGetPostsQuery()

  function onInputChange(e) {
    setSearch(e.target.value)
  }

  function handleSearch() {
    if (isLoading) return
    setIsSearching(true)

    const trimmedSearch = search.trim().toLowerCase()

    if (trimmedSearch === '') {
      onSearch(posts)
    } else {
      const filteredPosts = posts.filter((post) =>
        post.nombre.toLowerCase().includes(trimmedSearch)
      )
      onSearch(filteredPosts)
    }

    setIsSearching(false)
  }

  return (
    <div className="flex justify-between">
      <Input placeholder="Filtro de Nombre" onChange={onInputChange} />
      <Button
        onClick={handleSearch}
        disabled={isSearching}
        className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded w-28"
      >
        Buscar
      </Button>
    </div>
  )
}

export default Search
