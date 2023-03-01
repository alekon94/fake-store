import PropTypes from 'prop-types';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './styled';

export default function Page({ children }) {
    return (
        <>
            <Header />
            <Main>{children}</Main>
            <Footer />
        </>
    );
}

Page.propTypes = {
    children: PropTypes.node.isRequired,
};
