import pxToRem from '@theme/mixins/pxToRem';
import styled, { css } from 'styled-components';

export const List = styled.ul`
    max-width: ${pxToRem(820)};
    display: flex;
    flex-flow: wrap;
    align-items: center;
    justify-content: center;
`;

export const TitleBox = styled.div`
    position: relative;
    &:before,
    &:after {
        background: ${({ theme }) => theme.colors.brand};
        content: '';
        height: ${pxToRem(3)};
        right: 1%;
        position: absolute;
        top: 25%;
        width: ${pxToRem(21)};
        transition: transform 500ms ease;
        transform: rotate(90deg);
        height: ${pxToRem(2)};
        width: ${pxToRem(16)};
    }

    &:after {
        transform-origin: center;
        transform: rotate(180deg);
    }
`;
export const Title = styled.h3`
    max-width: 18.125rem;
    text-align: left;
    color: ${({ theme }) => theme.colors.brand};
    text-align: left;
`;
export const Content = styled.div`
    overflow: auto;
    transition: max-height 0.6s ease;
`;

export const Item = styled.li`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding-top: ${pxToRem(24)};
    padding-bottom: ${pxToRem(22)};
    transition: 0.2s ease;
    margin-left: calc(-1 * var(--s-padding-x));
    margin-right: calc(-1 * var(--s-padding-x));
    list-style-type: none;
    border-top: ${pxToRem(1)} solid ${({ theme }) => theme.colors.brand};
    &:last-child {
        border-bottom: ${pxToRem(1)} solid ${({ theme }) => theme.colors.brand};
    }
    ${({ isActive }) =>
        isActive &&
        css`
            ${TitleBox} {
                transition: 0.2s ease;
                &:after {
                    transform: rotate(0deg);
                }

                &:before {
                    transform: rotate(0deg);
                }
            }
            ${Content} {
                transition: max-height 0.6s ease;
            }
        `}
`;
export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    width: 100%;
    &:hover {
        cursor: pointer;
    }
`;
