import React, { useEffect, useState } from 'react';
import { fetchInventory } from '../../api/api'; // Tamang path

const InventoryPage = () => {
    const [inventory, setInventory] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getInventory = async () => {
            try {
                const data = await fetchInventory();
                setInventory(data);
            } catch (err) {
                setError('Error fetching inventory');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getInventory();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h3>Product Inventory</h3>
            <ul>
                {inventory.map((item) => (
                    <li key={item.id}>
                        {item.name} - Price: PHP {item.price} - Stock: {item.stock}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default InventoryPage;



