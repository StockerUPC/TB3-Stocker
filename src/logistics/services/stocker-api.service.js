import api from '../../shared/api.service.js';

const getAllProducts = () => {
    return api.get('/products');
};

const getAllSuppliers = () => {
    return api.get('/suppliers');
};

const getAllOrders = () => {
    return api.get('/orders');
};

const getProductById = (productId) => {
    return api.get(`/products/${productId}`);
};

const getOrdersByProductsId = (productId) => {
    return api.get(`/orders?productId=${productId}`);
};

const registerUser = (user) => {
    return api.post('/users', user);
};

const loginUser = async (user) => {
    const users = await api.get('/users');
    return users.data.find(u => u.email === user.email && u.password === user.password);
};

export default {
    getAllProducts,
    getAllSuppliers,
    getAllOrders,
    getProductById,
    getOrdersByProductsId,
    registerUser,
    loginUser
}