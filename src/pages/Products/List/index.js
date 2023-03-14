import React, { useEffect, useReducer, useRef, useState } from 'react';

import getProducts from '../../../services/api';
import Catalog from './Catalog';
import Intro from './Intro';

function fetchReducer(state, action) {
    if (action.type === 'fetch') {
        return {
            ...state,
            products: null,
            error: null,
            loading: true,
        };
    }
    if (action.type === 'success') {
        return {
            ...state,
            products: action.products,
            error: null,
            loading: false,
            finalProducts: action.products.slice(0, state.pageSize),
        };
    }
    if (action.type === 'error') {
        return {
            products: null,
            error: action.message,
            loading: false,
        };
    }
    if (action.type === 'next') {
        return {
            ...state,
            error: null,
            loading: false,
            currentPage: state.currentPage + 1,
            finalProducts: state.products.slice(
                0,
                state.currentPage * state.pageSize,
            ),
        };
    }
    throw new Error(`That action type is not supported.`);
}

export default function List() {
    const [state, dispatch] = useReducer(fetchReducer, {
        products: null,
        error: null,
        loading: true,
        currentPage: 1,
        finalProducts: [],
        pageSize: 6,
    });
    const [page, setPage] = useState(1);
    const loader = useRef(null);

    useEffect(() => {
        if (page === 1) {
            getProducts()
                .then((products) => {
                    dispatch({ type: 'success', products });
                })
                .catch(({ message }) => dispatch({ type: 'error', message }));
        } else {
            dispatch({
                type: 'next',
            });
        }
    }, [page]);

    useEffect(() => {
        let observerRefValue = null;
        const options = {
            root: null,
            rootMargin: '200px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setPage((prevPage) => prevPage + 1);
            }
        }, options);

        if (loader.current) {
            observer.observe(loader.current);
            observerRefValue = loader.current;
        }

        return () => {
            if (observerRefValue) {
                observer.unobserve(observerRefValue);
            }
        };
    }, []);

    return (
        <>
            <Intro />
            <Catalog state={state} loader={loader} />
        </>
    );
}
