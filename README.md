<!-- start database: sudo docker compose up db  -->
<!-- list all docker containers sudo docker ps -a  -->
<!-- access db from cl sudo docker exec -it db psql -U <password> -->

## About

This is a quick and dirty setup for a fullstack web app. It just as a proof of concept on how to deploy a database, backend and frontend in docker containers.

## How to run the project

You need to have [docker](https://docs.docker.com/engine/install/) installed to run this repository.

Setup an .env file for the database url like this:

```bash
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/postgres?schema=public"
```

Run the docker containers:

```bash
docker compose up db -d
docker compose up backend -d
docker compose up frontend -d
```

You can check if the containers are running with:

```bash
docker ps -a
```

The project frontend runs on port [3000](http://localhost:3000/) by default :)

### Tech used

- [Node](https://nodejs.org/docs/latest/api/)
- [Express](https://expressjs.com/en/4x/api.html)
- [Postgresql](https://www.postgresql.org/docs/current/)
- [Prisma ORM](https://www.prisma.io/docs/orm/overview/introduction/what-is-prisma)
- [Axios](https://axios-http.com/docs/intro)
- [Next.js](https://nextjs.org/docs)
