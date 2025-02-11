# ⚛️ CRUD w Next.js + PostgreSQL 🐘

> Run: `npm run dev` to see the result.

To remember:

1. Open psql console: `psql -u estefanyaguilar -d mi_basededatos`.
2. Create products table. See: `/database/db.sql`.
3. Insert data to the table: See: `/database/db.sql`.
4. See the squema: `\d products`.
5. See the data on the table: `SELECT * FROM products`.

Also, to create the project:

1. `npx create-next-app nextjs-postgresql-read-exercise`.
2. `cd nextjs-postgresql-read-exercise`.
3. `npm install pg`.

Don´t forget to add a `.env.local` file w this:

`DATABASE_URL=postgresql://estefanyaguilar:password@localhost:5432/db_name;`

### See GET on website `http://localhost:3000/api/products`:

<kbd>
<img width="357" alt="Screenshot 2025-02-11 at 10 47 51 AM" src="https://github.com/user-attachments/assets/adc6a910-24e1-4585-aab1-2a2f46b97313" />
</kbd>

### Using Thunder Client:

<kbd>
<img width="1727" alt="Screenshot 2025-02-11 at 10 50 21 AM" src="https://github.com/user-attachments/assets/da639606-d813-4c99-9897-56c5dbcc17c7" />
</kbd>
