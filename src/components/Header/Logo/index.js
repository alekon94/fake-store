import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

export default function Logo({ isScrolled }) {
    return (
        <S.Logo>
            <S.LogoLink $isScrolled={isScrolled} to="/">
                <S.Icon />
            </S.LogoLink>
        </S.Logo>
    );
}
Logo.propTypes = {
    isScrolled: PropTypes.bool.isRequired,
};
