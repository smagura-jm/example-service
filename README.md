Install Prisma VS Code extension for syntax highlighting and formatting in schema file.

Create migration SQL without applying it:

```
npx prisma migrate dev --name init --create-only
```

Apply migrations:

```
npx prisma migrate dev
```
