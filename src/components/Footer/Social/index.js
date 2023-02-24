/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

import * as S from './styled';

export default function Social() {
    return (
        <S.Social>
            <S.SocialItem>
                <S.SocialLink to="test.email@mail.test">
                    <S.Mail />
                </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.SocialLink to="#">
                    <S.Instagram />
                </S.SocialLink>
            </S.SocialItem>
            <S.SocialItem>
                <S.SocialLink to="#">
                    <S.Facebook />
                </S.SocialLink>
            </S.SocialItem>
        </S.Social>
    );
}
