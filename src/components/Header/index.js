/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from 'react';

import Bar from './Bar';
import Logo from './Logo';
import Navigation from './Navigation';
import * as S from './styled';

export default function Header() {
    const [scrollPos, setScrollPos] = useState(0);
    const [isHide, setIsHide] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.pageYOffset > 1);
            setIsHide(window.pageYOffset > scrollPos);
            setScrollPos(window.pageYOffset);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);

    return (
        <S.Header isScrolled={isScrolled} isHide={isHide}>
            <S.Container>
                <Navigation isScrolled={isScrolled} />
                <Logo isScrolled={isScrolled} isHide={isHide} />
                <Bar isScrolled={isScrolled} />
            </S.Container>
        </S.Header>
    );
}
