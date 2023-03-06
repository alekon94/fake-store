import PropTypes from 'prop-types';
import React from 'react';

import VisuallyHiddenCss from './styled';

export default function VisuallyHidden({ children }) {
    return <VisuallyHiddenCss>{children}</VisuallyHiddenCss>;
}
VisuallyHidden.propTypes = {
    children: PropTypes.node.isRequired,
};
