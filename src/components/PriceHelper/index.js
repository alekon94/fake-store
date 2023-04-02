import { PropTypes } from 'prop-types';
import React from 'react';

export default function PriceHelper({ price }) {
    return <>$ {Number.parseFloat(price).toFixed(2)}</>;
}

PriceHelper.propTypes = {
    price: PropTypes.number.isRequired,
};
