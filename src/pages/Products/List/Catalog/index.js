/* eslint-disable react/forbid-prop-types */
import Loading from '@components/Loading';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';
import * as S from './styled';

export default function Catalog({ state, setElement }) {
    return (
        <S.Catalog>
            <S.Container>
                <S.Wrapper>
                    {state.loading === true ? <Loading /> : ''}
                    {state.error ? <p>Error</p> : ''}
                    {state.finalProducts ? (
                        <S.List>
                            {state.finalProducts.map((product) => (
                                <S.Item key={product.id} product={product}>
                                    <Card product={product} />
                                </S.Item>
                            ))}
                            <div ref={setElement} />
                        </S.List>
                    ) : (
                        ''
                    )}
                </S.Wrapper>
            </S.Container>
        </S.Catalog>
    );
}

Catalog.propTypes = {
    state: PropTypes.object.isRequired,
    setElement: PropTypes.func.isRequired,
};
