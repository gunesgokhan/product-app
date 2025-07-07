const express = require('express');
const cors = require('cors'); // CORS'u import edin
const app = express();
const PORT = process.env.PORT || 5000; // Portu environment değişkeninden veya 5000'den al

// Middlewares
app.use(cors()); // CORS'u tüm isteklere uygulayın
app.use(express.json()); // JSON istek gövdelerini ayrıştırmak için

// Basit bir test route'u
app.get('/', (req, res) => {
    res.send('Backend API is running!');
});

// Sunucuyu dinlemeye başla
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});