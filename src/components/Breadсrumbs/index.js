import React from 'react';
import { NavLink } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';

import * as S from './styled';

export default function Breadcrumbs() {
    const breadcrumbs = useBreadcrumbs();
    return (
        <S.Breadcrumbs>
            {breadcrumbs.map(({ match, breadcrumb }, index) => (
                <S.Breadcrumb key={match.pathname}>
                    {index === 0 ? '' : ' / '}
                    <NavLink key={match.pathname} to={match.pathname}>
                        {breadcrumb}
                    </NavLink>
                </S.Breadcrumb>
            ))}
        </S.Breadcrumbs>
    );
}
