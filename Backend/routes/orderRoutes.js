const express = require('express');
const router = express.Router();
const db = require('../db'); // Import ng iyong MySQL connection

// Order confirmation route
router.post('/confirm-order', async (req, res) => {
    const { userId, items, totalPrice, totalItems } = req.body;

    if (!userId || !items || items.length === 0) {
        return res.status(400).send('Invalid order data');
    }

    const insertOrderQuery = 'INSERT INTO orders (user_id, total_price, total_items) VALUES (?, ?, ?)';
    db.query(insertOrderQuery, [userId, totalPrice, totalItems], (err, result) => {
        if (err) {
            console.error('Error inserting order:', err);
            return res.status(500).send('Order confirmation failed');
        }

        const orderId = result.insertId;

        // Loop through each item and update the stock
        items.forEach(async (item) => {
            const { productId, quantity } = item;
            const updateStockQuery = 'UPDATE products SET stock = stock - ? WHERE id = ?';

            db.query(updateStockQuery, [quantity, productId], (err) => {
                if (err) {
                    console.error(`Error updating stock for product ${productId}:`, err);
                    return res.status(500).send('Stock update failed');
                }
            });
        });

        res.json({ orderId, message: 'Order confirmed and stock updated successfully' });
    });
});


// Other order-related routes (e.g., get all orders, etc.) can be added here

module.exports = router;


