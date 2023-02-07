import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

function Id() {
    const { id } = useParams();
    return id ? <p>{id} `s Profile</p> : <p>My own profile</p>;
}
export default function Products() {
    return (
        <Routes>
            <Route path="/products/:id" element={<Id />} />
        </Routes>
    );
}
