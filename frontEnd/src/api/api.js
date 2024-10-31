import axios from 'axios';

// I-set up ang axios instance na may base URL
const api = axios.create({
    baseURL: 'http://localhost:5000/api', // Tiyakin na ito ay tamang URL
});

// Function para makuha ang order status batay sa orderId
export const fetchOrderStatus = async (orderId) => {
    try {
        const response = await api.get(`/orders/${orderId}/status`); // I-adjust ang endpoint kung kinakailangan
        return response.data; // Ibalik ang data mula sa response
    } catch (error) {
        throw error; // Itapon ang error kung may mangyari
    }
};

// Function para makuha ang inventory (i-update kung kinakailangan)
export const fetchInventory = async () => {
    try {
        const response = await api.get('/inventory'); // I-set ang tamang endpoint para sa inventory
        return response.data; // Ibalik ang inventory data
    } catch (error) {
        throw error; // Itapon ang error kung may mangyari
    }
};

// I-export ang axios instance para sa ibang bahagi ng application
export default api;

