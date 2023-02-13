import React, { useState, useEffect } from 'react';
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

    return (
        <S.Header
            className={`${isScrolled ? 'is-scrolled' : ''} ${
                isHide ? 'is-transform' : ''
            }`}
        >
            <S.Container>
                <Navigation />
            </S.Container>
        </S.Header>
    );
}
