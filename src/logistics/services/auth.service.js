import authService from '../services/auth.service.js';
import router from "../../router/index.js";

export default {
    registerUser(user) {
        return new Promise((resolve, reject) => {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let existingUser = users.find(u => u.email === user.email);
            if(existingUser) {
                reject('User already exists');
            } else {
                users.push(user);
                localStorage.setItem('users', JSON.stringify(users));
                resolve(user);
            }
        });
    },
    updateUserSubscription(email, plan) {
        return new Promise((resolve, reject) => {
            let users = JSON.parse(localStorage.getItem('users')) || [];
            let user = users.find(user => user.email === email);
            if(user) {
                user.subscription = plan;
                localStorage.setItem('users', JSON.stringify(users));
                router.push('/login');
                resolve(user);
            } else {
                reject('User not found');
            }
        });
    },

    getAllUsers() {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        return users;
        console.log(authService.getAllUsers());
    },
    
    loginUser(credentials) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        for(let user of users) {
            if(user.email === credentials.email && user.password === credentials.password) {
                return user;
            }
        }
        return null;
    }
}
