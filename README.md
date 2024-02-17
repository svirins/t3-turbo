# t3-turbo

- Framework: Next.js
- Database: Postgres (with PostGIS)
- ORM: Prisma
- API: tRPC + Tanstack Query
- Deployment: Vercel
- Styling: Tailwind CSS + Daisy UI
- Maps: Mapbox

This application requires Node.js v18.17+.

1. Clone the repo. Create a `.env.local` file similar to `.env.example`.
2. Keep in mind: `@acme/db` is set up to use Prisma Accelerate.
3. Run `pnpm i && turbo build` then `cd apps/web && pnpm start`.
