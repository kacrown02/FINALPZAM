import React, { useEffect, useState } from 'react';
import { fetchOrderStatus } from '../../api/api'; // Siguraduhing tama ang path

const OrderStatus = ({ orderId }) => {
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrderStatus = async () => {
            try {
                const data = await fetchOrderStatus(orderId);
                setStatus(data.status);
            } catch (err) {
                setError('Error fetching order status');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        getOrderStatus();
    }, [orderId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h3>Order Status</h3>
            <p>Status: {status}</p>
        </div>
    );
};

export default OrderStatus;


