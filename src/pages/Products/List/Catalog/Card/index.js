/* eslint-disable react/forbid-prop-types */
import PriceHelper from '@components/PriceHelper';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

export default function Card({ product }) {
    console.log(product);
    return (
        <S.Card>
            <S.Information>
                <S.Wrapper>
                    <S.Title>
                        <S.TitleLink to={`/products/${product.id}`}>
                            {product.title}
                        </S.TitleLink>
                    </S.Title>
                    <S.Price>
                        <S.Regular>
                            <S.PriceItem>
                                <PriceHelper price={product.price} />
                            </S.PriceItem>
                        </S.Regular>
                    </S.Price>
                </S.Wrapper>
            </S.Information>
            <S.Product>
                <S.Inner>
                    <S.Media>
                        <S.MediaLink to={`/products/${product.id}`}>
                            <S.Image src={product.image} />
                        </S.MediaLink>
                        <S.Button>
                            <S.ButtonText>Add to cart</S.ButtonText>
                            <S.ButtonPrice>
                                <PriceHelper price={product.price} />
                            </S.ButtonPrice>
                        </S.Button>
                    </S.Media>
                </S.Inner>
            </S.Product>
        </S.Card>
    );
}

Card.propTypes = {
    product: PropTypes.object.isRequired,
};
