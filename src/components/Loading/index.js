import React from 'react';

import VisuallyHidden from '../VisuallyHidden';
import LoadingCircle from './styled';

export default function Loading() {
    return (
        <LoadingCircle>
            <VisuallyHidden>Loading...</VisuallyHidden>
        </LoadingCircle>
    );
}
