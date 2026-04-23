const { Pool } = require('pg');
require('dotenv').config();

// Veritabanı bağlantı ayarları
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

async function ilkOgrenciyiEkle() {
  try {
    const sorgu = 'INSERT INTO users (ogrenci_no, sifre, isim_soyisim, bolum) VALUES ($1, $2, $3, $4) RETURNING *';
    const degerler = ['2026001', 'sifre123', 'Senin Adın', 'Yazılım'];
    
    const sonuc = await pool.query(sorgu, degerler);
    console.log('Başarıyla eklendi:', sonuc.rows[0]);
  } catch (err) {
    console.error('Hata oluştu:', err);
  } finally {
    pool.end();
  }
}

ilkOgrenciyiEkle();