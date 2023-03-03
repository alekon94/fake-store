import PropTypes from 'prop-types';
import React from 'react';

import VisuallyHiddenCss from './styled';

export default function VisuallyHidden({ text }) {
    return <VisuallyHiddenCss>{text}</VisuallyHiddenCss>;
}
VisuallyHidden.propTypes = {
    text: PropTypes.string.isRequired,
};
