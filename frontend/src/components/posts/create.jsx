import { useState } from 'react'
import { Input, Button } from '@components'
import { useAddPostMutation } from '@services/api'

function Create() {
  const [createPost, { isLoading }] = useAddPostMutation()
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  function handleCreate() {
    if (!nombre || !descripcion) return

    createPost({
      nombre,
      descripcion,
    })
  }

  function handleChangeName(e) {
    setNombre(e.target.value)
  }

  function handleChangeDescription(e) {
    setDescripcion(e.target.value)
  }

  return (
    <div className="flex justify-between">
      <Input
        placeholder="Nombre"
        onChange={handleChangeName}
        disabled={isLoading}
        className="w-56"
      />
      <Input
        placeholder="Descripcion"
        onChange={handleChangeDescription}
        disabled={isLoading}
        className="w-full mx-8"
      />
      <Button
        onClick={handleCreate}
        disabled={isLoading}
        className="bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded w-28"
      >
        {isLoading ? 'Creando...' : 'Crear'}
      </Button>
    </div>
  )
}

export default Create
