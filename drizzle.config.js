import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  schema: './utils/schema.tsx',
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://neondb_owner:OhR8CEtp7Ael@ep-icy-term-a1sa7uoz.ap-southeast-1.aws.neon.tech/AI%20Content%20Generator?sslmode=require',
  },
});
