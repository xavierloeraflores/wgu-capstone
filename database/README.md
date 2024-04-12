# Database

Built with:

- [Postgres](https://www.postgresql.org/)
- [Drizzle](https://orm.drizzle.team/docs/overview)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

# Set Up

Create Postgres database:
(Example using the Postgres CLI:)

```
CREATE DATABASE <DB_NAME>
```

(From the database directory. This file is database/README.md.)

Install dependencies:

```
npm install
```

Create environment file:

```
touch .env
```

In the .env file, add the Database Connection String:

```
DB_CONNECTION="postgresql://user:password@localhost:5432/database"
```

# Drizzle Commands

Drizzle Push (to push the schema to the database.)

```
npx drizzle-kit push:pg
```

Drizzle Studio (to start the database browser.)

```
npx drizzle-kit studio
```
