/* eslint-disable react/jsx-props-no-spreading */
import * as F from '@components/Field/styled';
import React from 'react';

import * as S from './styled';

export default function Form() {
    return (
        <S.Form
            method="post"
            action="/contact#ContactFooter"
            id="ContactFooter"
            accept-charset="UTF-8"
        >
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
                        data-validate="email|required"
                        data-field-value=""
                        data-field-submit=""
                    />
                    <F.Label htmlFor="newsletterForm--footer">
                        Enter your email to subscribe
                    </F.Label>
                </S.Field>
                <S.Button
                    defaultValue="Enter"
                    type="button"
                    name="commit"
                    id="Subscribe"
                    aria-label="Subscribe"
                >
                    <S.Icon />
                </S.Button>
            </S.Inner>
            <S.Success>
                <S.PSuccess>Thank you for your message!</S.PSuccess>
            </S.Success>
        </S.Form>
    );
}
