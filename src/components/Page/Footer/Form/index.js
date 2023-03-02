/* eslint-disable react/jsx-props-no-spreading */
import InputMail from '@components/InputMail/index';
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
            <InputMail
                id="newsletterForm--footer"
                type="email"
                name="contact[email]"
                defaultValue=""
                aria-required="true"
                autoCorrect="off"
                autoCapitalize="off"
                autoComplete="email"
                placeholder="Email"
                label="Enter your email to subscribe"
            />
            <S.Success>
                <S.SuccessText>Thank you for your message!</S.SuccessText>
            </S.Success>
        </S.Form>
    );
}
