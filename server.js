const express = require('express');
const { Pool } = require('pg');
require('dotenv').config();

const app = express();
const port = 3000;

// Veritabanı Bağlantı Havuzu
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 1. Uç Nokta: Ana Sayfa
app.get('/', (req, res) => {
  res.send('HEC TD API Sunucusu Çalışıyor!');
});

// 2. Uç Nokta: Tüm Öğrencileri Getir (YENİ!)
app.get('/ogrenciler', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows); // Veritabanındaki tüm satırları JSON formatında gönderir
  } catch (err) {
    console.error(err);
    res.status(500).send('Veritabanı hatası oluştu.');
  }
});

app.listen(port, () => {
  console.log(`Sunucu http://localhost:${port} adresinde hazır!`);
});