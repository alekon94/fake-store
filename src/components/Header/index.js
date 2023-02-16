/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useEffect } from 'react';
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
            const currentScrollPos = window.pageYOffset;

            if (window.pageYOffset > 1) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
            if (currentScrollPos > scrollPos) {
                setIsHide(true);
            } else {
                setIsHide(false);
            }
            setScrollPos(currentScrollPos);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPos]);
    const props = { isScrolled, isHide };
    return (
        <S.Header isScrolled={isScrolled} isHide={isHide}>
            <S.Container>
                <Navigation {...props} />
                <Logo {...props} />
                <Bar {...props} />
            </S.Container>
        </S.Header>
    );
}
