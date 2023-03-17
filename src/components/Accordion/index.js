/* eslint-disable react/forbid-prop-types */

/* eslint-disable jsx-a11y/no-static-element-interactions */

/* eslint-disable jsx-a11y/click-events-have-key-events */
import { PropTypes } from 'prop-types';
import React, { useRef, useState } from 'react';

import * as S from './styled';

function Accordion({ children }) {
    const [activeIndex, setActiveIndex] = useState(-1);
    const content = useRef(null);

    function toggleAccordion(isActive, index) {
        setActiveIndex(isActive ? -1 : index);
    }
    return (
        <S.List>
            {React.Children.map(children, (child, index) => {
                const isActive = activeIndex === index;
                return (
                    <S.Item
                        onClick={() => toggleAccordion(isActive, index)}
                        isActive={isActive}
                    >
                        <S.TitleBox>
                            <S.Button
                                type="button"
                                onClick={() => toggleAccordion(isActive, index)}
                            >
                                {' '}
                                <S.Title>{child.props.title}</S.Title>
                            </S.Button>
                        </S.TitleBox>
                        <S.Content
                            ref={content}
                            style={
                                isActive
                                    ? {
                                          maxHeight:
                                              content.current.scrollHeight,
                                      }
                                    : { maxHeight: '0px' }
                            }
                        >
                            {child.props.children}
                        </S.Content>
                    </S.Item>
                );
            })}
        </S.List>
    );
}

function AccordionItem({ title, children }) {
    const content = useRef(null);

    return (
        <S.Item>
            <S.TitleBox>{title}</S.TitleBox>
            <S.Content ref={content}>{children}</S.Content>
        </S.Item>
    );
}

export { Accordion, AccordionItem };

Accordion.propTypes = {
    children: PropTypes.node.isRequired,
};
AccordionItem.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};
