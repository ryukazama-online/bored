// api/ektp.js

export default async function handler(req, res) {
  const { nik } = req.query;

  if (!nik) {
    return res.status(400).json({ error: "NIK tidak ditemukan di query" });
  }

  try {
    const response = await fetch(`https://nik-parser.p.rapidapi.com/?nik=${nik}`, {
      method: 'GET',
      headers: {
        'X-Rapidapi-Key': 'b7f6d363b6mshf8ae2dcdbe8e7c9p1af6c6jsn64f838b2c75b',
        'X-Rapidapi-Host': 'nik-parser.p.rapidapi.com'
      }
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Gagal mengambil data dari API', detail: err.message });
  }
}
