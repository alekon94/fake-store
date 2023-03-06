import React from 'react';

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
            allPage:
                action.products.length === 0
                    ? 1
                    : Math.ceil(action.products.length / state.pageSize),
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
    const [state, dispatch] = React.useReducer(fetchReducer, {
        products: null,
        error: null,
        loading: true,
        currentPage: 1,
        finalProducts: [],
        pageSize: 6,
        allPage: 1,
    });
    const [page, setPage] = React.useState(1);
    const [element, setElement] = React.useState(null);

    React.useEffect(() => {
        if (page === 1) {
            dispatch({ type: 'fetch' });
        }
        getProducts()
            .then((products) => {
                if (page === 1) {
                    dispatch({ type: 'success', products });
                } else {
                    dispatch({
                        type: 'next',
                    });
                }
            })
            .catch(({ message }) => dispatch({ type: 'error', message }));
    }, [page]);

    const observer = React.useRef(
        new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting) {
                    setPage((prev) => prev + 1);
                }
            },
            { threshold: 1 },
        ),
    );

    React.useEffect(() => {
        const currentElement = element;
        const currentObserver = observer.current;
        if (currentElement) {
            currentObserver.observe(currentElement);
        }
        return () => {
            if (currentElement) {
                currentObserver.unobserve(currentElement);
            }
        };
    }, [element]);
    return (
        <>
            <Intro />
            <Catalog state={state} setElement={setElement} />
        </>
    );
}
