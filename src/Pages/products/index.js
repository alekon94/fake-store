import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Id from './product';

export default function Products() {
    return (
        <Routes>
            <Route path="/:id" element={<Id />} />
        </Routes>
    );
}
