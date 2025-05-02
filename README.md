## Requisitos Previos

Antes de comenzar, instale las siguientes dependencias en su sistema:

- **Node.js**: v22.15.0 o superior
- **npm**: 10.9.2 o superior
- **Docker**: Última versión estable

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/jc-alvaradov/posts.git
cd posts
```

### 2. Configuración del Backend

Inicie los servicios del backend usando Docker:

```bash
cd backend
docker compose up
```

Los servicios del backend estarán disponibles en http://localhost:3000

### 3. Configuración del Frontend

Instale las dependencias e inicie el servidor de desarrollo:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

## Uso

Una vez que los servicios de backend y frontend estén en funcionamiento, podrá acceder a la aplicación en:

http://localhost:5173
