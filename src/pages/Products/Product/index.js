import React from 'react';
import { useParams } from 'react-router-dom';

export default function Product() {
    const { id } = useParams();

    return id ? <p>{id} `s Profile</p> : <p>My own profileee</p>;
}
