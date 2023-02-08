import React from 'react';
import { Route, Routes } from 'react-router-dom';

const List = React.lazy(() => import('./list'));
const Id = React.lazy(() => import('./product'));

export default function Products() {
    return (
        <Routes>
            <Route path="/" element={<List />} />
            <Route path="/:id" element={<Id />} />
        </Routes>
    );
}
