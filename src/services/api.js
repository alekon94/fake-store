import instance from './config';

export default function getProducts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            instance
                .get('/products')
                .then((response) => resolve(response.data))
                .catch((error) => reject(error));
        }, instance.defaults.timeout);
    });
}
