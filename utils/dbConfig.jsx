import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema.jsx';
const  sql = neon('postgresql://Expense-Tracker_owner:npg_rAgYVDXxw9E3@ep-mute-sky-a27wrpbh-pooler.eu-central-1.aws.neon.tech/Expense-Tracker?sslmode=require&connect_timeout=10&pool_timeout=30');
export const db = drizzle(sql,{schema});