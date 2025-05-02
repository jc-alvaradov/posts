function Loader() {
  return (
    <div className="flex flex-col items-center justify-center h-48">
      <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      <p className="mt-4 text-gray-600 text-sm">Cargando...</p>
    </div>
  )
}

export default Loader
