import { Button } from '@components'
import { useDeletePostMutation } from '@services/api'

function List({ filteredPosts, allPosts }) {
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation()

  return (
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200 text-left">
          <th className="px-4 py-2">Nombre</th>
          <th className="px-4 py-2">Descripcion</th>
          <th className="px-4 py-2 text-right">Acción</th>
        </tr>
      </thead>
      <tbody>
        {filteredPosts.map((post) => (
          <tr key={post.id} className="border-t border-gray-300">
            <td className="px-4 py-2">{post.nombre}</td>
            <td className="px-4 py-2 truncate overflow-hidden whitespace-nowrap max-w-[300px]">
              {post.descripcion}
            </td>
            <td className="px-4 py-2 text-right">
              <Button
                onClick={() => deletePost(post.id)}
                disabled={isDeleting}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
              >
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
        {filteredPosts.length === 0 && allPosts.length > 0 && (
          <tr>
            <td colSpan="3" className="px-4 py-2 text-center">
              No se encontraron posts con ese texto en su nombre
            </td>
          </tr>
        )}
        {allPosts.length === 0 && (
          <tr>
            <td colSpan="3" className="px-4 py-2 text-center">
              No hay posts creados aún
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

export default List
