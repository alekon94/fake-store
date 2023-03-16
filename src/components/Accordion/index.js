/* eslint-disable react/forbid-prop-types */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropTypes } from 'prop-types';
import React, { useState } from 'react';

import * as S from './styled';

function Accordion({ children }) {
    const [activeIndex, setActiveIndex] = useState(-1);

    return (
        <S.List>
            {React.Children.map(children, (child, index) => {
                const isActive = activeIndex === index;
                return (
                    <S.Item>
                        <S.Title
                            onClick={() =>
                                setActiveIndex(isActive ? -1 : index)
                            }
                        >
                            {child.props.title}
                        </S.Title>
                        {isActive && (
                            <S.Content>{child.props.children}</S.Content>
                        )}
                    </S.Item>
                );
            })}
        </S.List>
    );
}

function AccordionItem({ title, children }) {
    return (
        <S.Item>
            <S.Title>{title}</S.Title>
            <S.Content>{children}</S.Content>
        </S.Item>
    );
}

export { Accordion, AccordionItem };

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
};
AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
};
