import React from 'react';

import * as S from './styled';
import { ReactComponent as BasketIcon } from '../icons/header_bascet.svg';
import { ReactComponent as SearchIcon } from '../icons/header_search.svg';

export default function Bar({ ...args }) {
    return (
        <S.Bar>
            <S.BarIcons $isScrolled={args.isScrolled}>
                <S.IconsItem $isScrolled={args.isScrolled}>
                    <S.IconsLink $isScrolled={args.isScrolled} to="/login">
                        login
                    </S.IconsLink>
                </S.IconsItem>
                <S.IconsItem $isScrolled={args.isScrolled}>
                    <S.IconsLink $isScrolled={args.isScrolled} to="/search">
                        <SearchIcon />
                    </S.IconsLink>
                </S.IconsItem>
                <S.IconsItem $isScrolled={args.isScrolled}>
                    <S.IconsLink $isScrolled={args.isScrolled} to="/cart">
                        <BasketIcon />
                    </S.IconsLink>
                </S.IconsItem>
            </S.BarIcons>
        </S.Bar>
    );
}
