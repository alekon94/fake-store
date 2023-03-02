import mediaBreakpointUp from '@theme/mixins/mediaBreakpointUp';
import styled from 'styled-components';

export const Catalog = styled.div`
    padding-left: 1rem;
    padding-right: 1rem;
    background: $c-white;
    position: relative;
    padding-top: 7.5rem;
    display: flex;
    flex: 100%;
    justify-content: center;
    ${mediaBreakpointUp('md')} {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
    }
    ${mediaBreakpointUp('lg')} {
        padding-left: 5rem;
        padding-right: 5rem;
    }
`;
export const Container = styled.div``;
export const Wrapper = styled.div``;

export const List = styled.ul`
    list-style: none;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    ${mediaBreakpointUp('sm')} {
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        -webkit-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
    }
`;
export const Item = styled.li`
    width: 100%;
    margin-bottom: 3.75rem;
    ${mediaBreakpointUp('sm')} {
        width: 49%;
        margin-right: 2%;
        transition: 0.2s;

        &:nth-child(even) {
            margin-right: 0;
        }
    }
    ${mediaBreakpointUp('lg')} {
        width: 32%;
        margin-right: 2%;

        &:nth-child(even) {
            margin-right: 2%;
        }

        &:nth-child(3n + 3) {
            margin-right: 0;
        }
    }
`;
