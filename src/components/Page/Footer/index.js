/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import Form from './Form';
import List from './List';
import FooterLogo from './LogoFooter';
import Social from './Social';
import * as S from './styled';

export default function Footer() {
    return (
        <S.Footer>
            <S.Container>
                <FooterLogo />
                <S.Middle>
                    <List />
                    <S.Wrapper>
                        <Form />
                        <Social />
                    </S.Wrapper>
                </S.Middle>
                <S.Author>© 2023 Yonne. All rights reserved.</S.Author>
            </S.Container>
        </S.Footer>
    );
}
