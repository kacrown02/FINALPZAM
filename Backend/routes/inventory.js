const express = require('express');
const router = express.Router();
const db = require('../db'); // Import ng iyong MySQL connection

// Route para makuha ang inventory
router.get('/', (req, res) => {
    const query = 'SELECT * FROM products'; // Palitan ito base sa iyong database structure
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching inventory:', err);
            return res.status(500).send('Server error');
        }

        res.json(results);
    });
});

// Route para i-update ang stock kapag may order
router.put('/update-stock/:productId', (req, res) => {
    const { productId } = req.params;
    const { quantity } = req.body;

    const query = 'UPDATE products SET stock = stock - ? WHERE id = ?';
    db.query(query, [quantity, productId], (err, results) => {
        if (err) {
            console.error('Error updating stock:', err);
            return res.status(500).send('Server error');
        }

        res.send('Stock updated successfully');
    });
});

module.exports = router;



