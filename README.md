## GraphQL API

Aplicación en Express.JS encargada de consultar una REST-API con lenguage GQL. En este ejemplo se usa la API pública [SWAPI](https://swapi.dev/).

## Tecnologías
- NodeJS
- ExpressJS
- GraphQL
- Docker

## Instalación

```bash
git clone <dir> # Clonamos el proyecto
```

```bash
cd graphql-api/ # Entramos al proyecto
```

```bash
docker build -t graphql-api . # Construimos la imagen
```

```bash
docker container run --name graphql-api -d -p 8080:8080 graphql-api # Ejecutamos el contenedor
```

## Uso

Acceder a la URL <http://localhost:8080/gql>

Queries disponibles:
![]()