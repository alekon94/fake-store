/* eslint-disable react/jsx-props-no-spreading */
import * as F from '@components/Styled/fieldStyled';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styled';

export default function InputMail({ label, id, type, ...args }) {
    return (
        <S.Inner>
            <S.Field>
                <F.Input {...args} />
                <F.Label htmlFor={id}>{label}</F.Label>
            </S.Field>
            <S.Button type="button">
                <S.Icon />
            </S.Button>
        </S.Inner>
    );
}
InputMail.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};
