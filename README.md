## GraphQL API

Aplicación en Express.JS encargada de consultar una REST-API con lenguage GQL. En este ejemplo se usa la API pública [SWAPI](https://swapi.dev/).

## Tecnologías
- NodeJS
- ExpressJS
- GraphQL
- Docker

## Instalación

```bash
git clone https://github.com/adriangl-dev/graphql-api.git # Clonamos el proyecto
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

![image](https://user-images.githubusercontent.com/2179475/118569149-9eea1980-b779-11eb-8def-055432fd6893.png)

![image](https://user-images.githubusercontent.com/2179475/118569173-ae696280-b779-11eb-8cfe-c91f2163b8c6.png)

![image](https://user-images.githubusercontent.com/2179475/118569258-d9ec4d00-b779-11eb-8fde-82a8f5062263.png)
