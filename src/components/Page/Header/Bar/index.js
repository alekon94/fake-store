import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

export default function Bar({ isScrolled }) {
    return (
        <S.Bar $isScrolled={isScrolled}>
            <S.BarIcons>
                <S.IconsItem>
                    <S.IconsLink to="/login">login</S.IconsLink>
                </S.IconsItem>
                <S.IconsItem>
                    <S.IconsLink to="/search">
                        <S.Search />
                    </S.IconsLink>
                </S.IconsItem>
                <S.IconsItem>
                    <S.IconsLink to="/cart">
                        <S.Basket />
                    </S.IconsLink>
                </S.IconsItem>
            </S.BarIcons>
        </S.Bar>
    );
}
Bar.propTypes = {
    isScrolled: PropTypes.bool.isRequired,
};
