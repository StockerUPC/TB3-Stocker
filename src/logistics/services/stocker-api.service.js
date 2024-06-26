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
//Products
const deleteProduct = (productId) => {
    return api.delete(`/products/${productId}`);
};

const updateProduct = (productId, product) => {
    return api.put(`/products/${productId}`, product);
};

const addProduct = (productData) => {
    return api.post('/products', productData);
};
//Suppliers
const deleteSupplier = (supplierId) => {
    return api.delete(`/suppliers/${supplierId}`);
};

const updateSupplier = (supplierId, supplier) => {
    return api.put(`/suppliers/${supplierId}`, supplier);
};

const addSupplier = (supplierData) => {
    return api.post('/suppliers', supplierData);
};
//Orders
const deleteOrder = (orderId) => {
    return api.delete(`/orders/${orderId}`);
};

const updateOrder = (orderId, order) => {
    return api.put(`/orders/${orderId}`, order);
};

const addOrder = (orderData) => {
    return api.post('/orders', orderData);
};

export default {
    getAllProducts,
    getAllSuppliers,
    getAllOrders,
    getProductById,
    getOrdersByProductsId,
    registerUser,
    loginUser,
    deleteProduct,
    updateProduct,
    addProduct,
    deleteSupplier,
    updateSupplier,
    addSupplier,
    deleteOrder,
    updateOrder,
    addOrder
}