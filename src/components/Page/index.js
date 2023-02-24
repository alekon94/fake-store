import PropTypes from 'prop-types';
import React from 'react';

import SPage from './styled';

export default function Page({ children }) {
    return <SPage>{children}</SPage>;
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
};
