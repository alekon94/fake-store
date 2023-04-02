import instance from './config';

export default function getProducts() {
    return new Promise((resolve, reject) => {
        instance
            .get('/products')
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}
export function getSingleProduct(id) {
    return new Promise((resolve, reject) => {
        instance
            .get(`/products/${id}`)
            .then((response) => resolve(response.data))
            .catch((error) => reject(error));
    });
}
