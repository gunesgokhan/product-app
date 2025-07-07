// backend/services/goldPriceService.js
require('dotenv').config(); // .env dosyasını yükle
const axios = require('axios');

// Örnek bir altın fiyatı API'si URL'si ve anahtarı
// Kendi seçtiğiniz API'ye göre burayı güncelleyin!
const GOLD_API_BASE_URL = "YOUR_GOLD_PRICE_API_URL"; // Ör: https://api.example.com/gold
const GOLD_API_KEY = process.env.GOLD_API_KEY; // .env dosyasından okundu

async function getGoldPricePerGramUSD() {
    try {
        // API'den altın fiyatını çekme
        // Bu kısım seçtiğiniz API'ye göre tamamen değişecektir!
        // Örn: const response = await axios.get(`${GOLD_API_BASE_URL}/latest?access_key=${GOLD_API_KEY}`);
        // response.data'dan gram başına dolar fiyatını ayıklayın.
        // Şimdilik sabit bir değer döndürelim, entegrasyonu sonra yaparsınız.
        console.log('Fetching real-time gold price...');
        const response = await axios.get(`${GOLD_API_BASE_URL}?apikey=${GOLD_API_KEY}`); // API'nizin endpointine göre güncelleyin
        // API yanıtına göre doğru veriyi çekin. Bu sadece bir örnek:
        const goldPrice = response.data.price_per_gram_usd || 65; // Eğer API'den gelmezse varsayılan değer

        return goldPrice;
    } catch (error) {
        console.error('Error fetching gold price:', error.message);
        // Hata durumunda varsayılan veya önceden belirlenmiş bir değer döndürebilirsiniz
        // veya hatayı fırlatabilirsiniz.
        throw new Error('Could not fetch real-time gold price. Please check API key or service.');
    }
}

module.exports = { getGoldPricePerGramUSD };