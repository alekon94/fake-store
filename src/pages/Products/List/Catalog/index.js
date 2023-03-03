import Loading from '@components/Loading';
import getProducts from '@services/api';
import React from 'react';

import Card from './Card';
import * as S from './styled';

function fetchReducer(state, action) {
    if (action.type === 'fetch') {
        return {
            products: null,
            error: null,
            loading: true,
        };
    }
    if (action.type === 'success') {
        return {
            products: action.products,
            error: null,
            loading: false,
        };
    }
    if (action.type === 'error') {
        return {
            products: null,
            error: action.message,
            loading: false,
        };
    }
    throw new Error(`That action type is not supported.`);
}

export default function Catalog() {
    const [state, dispatch] = React.useReducer(fetchReducer, {
        products: null,
        error: null,
        loading: true,
    });
    React.useEffect(() => {
        dispatch({ type: 'fetch' });

        getProducts()
            .then((products) => dispatch({ type: 'success', products }))
            .catch(({ message }) => dispatch({ type: 'error', message }));
    }, []);
    return (
        <S.Catalog>
            <S.Container>
                <S.Wrapper>
                    {state.loading === true ? <Loading /> : ''}
                    {state.error ? <p>Error</p> : ''}
                    {state.products ? (
                        <S.List>
                            {state.products.map((product) => (
                                <S.Item key={product.id} product={product}>
                                    <Card product={product} />
                                </S.Item>
                            ))}
                        </S.List>
                    ) : (
                        ''
                    )}
                </S.Wrapper>
            </S.Container>
        </S.Catalog>
    );
}
