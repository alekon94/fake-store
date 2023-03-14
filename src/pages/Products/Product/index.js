import Breadcrumbs from '@components/Breadсrumbs';
import Loading from '@components/Loading';
import { getSingleProduct } from '@services/api';
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';

import * as S from './styled';

function fetchReducer(state, action) {
    if (action.type === 'fetch') {
        return {
            product: null,
            error: null,
            loading: true,
        };
    }
    if (action.type === 'success') {
        console.log(action.product);
        return {
            product: action.product,
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
export default function Product() {
    const { id } = useParams();

    const [state, dispatch] = useReducer(fetchReducer, {
        product: null,
        error: null,
        loading: true,
    });

    useEffect(() => {
        getSingleProduct(id)
            .then((product) => {
                dispatch({ type: 'success', product });
            })
            .catch(({ message }) => dispatch({ type: 'error', message }));
    }, [id]);

    return (
        <S.Product>
            <S.Container>
                {state.product ? (
                    <S.Wrapper>
                        <S.ImageBox>
                            <S.ImageContainer>
                                <img
                                    src={state.product.image}
                                    alt={state.product.title}
                                />
                            </S.ImageContainer>
                        </S.ImageBox>

                        <S.Info>
                            <S.InfoContainer>
                                <S.InfoContent>
                                    <Breadcrumbs />
                                    <S.Form>
                                        <S.InfoRow>
                                            <S.InfoTitle>
                                                {state.product.title}
                                            </S.InfoTitle>
                                            <S.InfoPrice>
                                                <S.Price>
                                                    <S.PriceRegular>
                                                        <S.PriceItem>
                                                            $
                                                            {
                                                                state.product
                                                                    .price
                                                            }
                                                        </S.PriceItem>
                                                    </S.PriceRegular>
                                                </S.Price>
                                            </S.InfoPrice>
                                        </S.InfoRow>
                                        <S.InfoDescription>
                                            {state.product.description}
                                        </S.InfoDescription>
                                        <S.ButtonBox>
                                            <S.Button
                                                type="submit"
                                                name="add"
                                                value="Submit"
                                            >
                                                <S.ButtonText>
                                                    Add to cart
                                                </S.ButtonText>
                                                <S.Price>
                                                    ${state.product.price}
                                                </S.Price>
                                            </S.Button>
                                        </S.ButtonBox>
                                    </S.Form>
                                </S.InfoContent>
                            </S.InfoContainer>
                        </S.Info>
                    </S.Wrapper>
                ) : (
                    <Loading />
                )}
            </S.Container>
        </S.Product>
    );
}
