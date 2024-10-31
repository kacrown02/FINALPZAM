    import { Routes, Route } from 'react-router-dom';
    import HomePage from './pages/Home/HomePage';
    import CupPage from './pages/Cup/CupPage';
    import CartPage from './pages/Cart/CartPage';
    import CheckoutPage from './pages/Checkout/CheckoutPage';
    import PaymentPage from './pages/Payment/PaymentPage';
    import Login from './pages/Auth/Login';
    import Register from './pages/Auth/Register';
    import Profile from './pages/Auth/Profile';
    import AdminDashboard from './pages/Admin/AdminDashboard';
    import OrderStatusPage from './pages/Order/OrderStatusPage'; 
    import InventoryPage from "./pages/Inventory/InventoryPage"; 
    import api from './api/api';



    export default function AppRoutes() {
        return (
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/search/:searchTerm" element={<HomePage />} />
                <Route path="/tag/:tag" element={<HomePage />} />
                <Route path="/cup/:id" element={<CupPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/payment" element={<PaymentPage />} />
                <Route path="/admin-dashboard" element={<AdminDashboard />} />
                <Route path="/order-status" element={<OrderStatusPage />} />
                <Route path="/inventory" element={<InventoryPage />} />
            </Routes>
        );
    }
