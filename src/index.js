import express from 'express';
import db from './config/Database';

const app = express();

try {
  await db.authenticate();
  console.log('menghubungkan database...');
} catch (error) {
  console.error(error);
}
app.listen(5000, () => console.log('server berjalan di port 5000'));
