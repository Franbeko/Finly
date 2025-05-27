import dotenv from 'dotenv';
dotenv.config();

/** @type {import('drizzle-kit').Config} */
export default {
  schema: "./utils/schema.jsx",
  out: "./drizzle/migrations",
  dialect: 'postgresql',
  dbCredentials: {
    url: 'postgresql://Expense-Tracker_owner:npg_rAgYVDXxw9E3@ep-mute-sky-a27wrpbh-pooler.eu-central-1.aws.neon.tech/Expense-Tracker?sslmode=require&connect_timeout=10&pool_timeout=30' // Changed from connectionString to url
  },
  verbose: true
};