import React from 'react';

import * as S from './styled';

export default function FooterLogo() {
    return (
        <S.Logo>
            <S.LogoLink to="/">
                <S.Icon />
            </S.LogoLink>
        </S.Logo>
    );
}
