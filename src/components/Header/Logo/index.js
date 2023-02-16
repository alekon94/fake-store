import React from 'react';

import * as S from './styled';
import { ReactComponent as LogoIcon } from '../icons/header_logo.svg';

export default function Logo() {
    return (
        <S.Logo>
            <S.LogoLink to="/">
                <LogoIcon />
            </S.LogoLink>
        </S.Logo>
    );
}
