import * as F from '@components/Field/styled';
import React from 'react';

import * as S from './styled';

export default function InputMail() {
    return (
        <S.Inner>
            <S.Field>
                <F.Input
                    id="newsletterForm--footer"
                    type="email"
                    name="contact[email]"
                    defaultValue=""
                    aria-required="true"
                    autoCorrect="off"
                    autoCapitalize="off"
                    autoComplete="email"
                    placeholder="Email"
                />
                <F.Label htmlFor="newsletterForm--footer">
                    Enter your email to subscribe
                </F.Label>
            </S.Field>
            <S.Button type="button">
                <S.Icon />
            </S.Button>
        </S.Inner>
    );
}
