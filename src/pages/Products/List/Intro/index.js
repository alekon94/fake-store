import React from 'react';

import * as S from './styled';

export default function Intro() {
    return (
        <S.Intro>
            <S.Container>
                <S.Picture>
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1921x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3842x1326.jpg?v=1640612347 2x "
                        media="(max-width: 376px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1921x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3842x1326.jpg?v=1640612347 2x "
                        media="(max-width: 479px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1921x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3842x1326.jpg?v=1640612347 2x "
                        media="(max-width: 767px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1921x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3842x1326.jpg?v=1640612347 2x "
                        media="(max-width: 1024px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1920x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3840x1325.jpg?v=1640612347 2x "
                        media="(max-width: 1199px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1920x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3840x1325.jpg?v=1640612347 2x "
                        media="(max-width: 1599px)"
                    />
                    <S.Source
                        srcset="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1920x663.jpg?v=1640612347 1x, //cdn.shopify.com/s/files/1/0218/7241/0724/files/another_3840x1325.jpg?v=1640612347 2x "
                        media="(min-width: 1599px)"
                    />
                    <S.Media
                        loading="lazy"
                        width="1920"
                        height="663"
                        src="//cdn.shopify.com/s/files/1/0218/7241/0724/files/another_1920x663.jpg?v=1640612347"
                        alt=""
                    />
                </S.Picture>
                <S.Wrapper>
                    <S.Content>
                        <S.Title>Find your treasure</S.Title>
                    </S.Content>
                </S.Wrapper>
            </S.Container>
        </S.Intro>
    );
}
