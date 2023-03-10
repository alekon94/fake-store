import React from 'react';
import { Route, Routes } from 'react-router-dom';

const List = React.lazy(() => import('./List'));
const Product = React.lazy(() => import('./Product'));

export default function Products() {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Product />} />
        </Routes>
    );
}
