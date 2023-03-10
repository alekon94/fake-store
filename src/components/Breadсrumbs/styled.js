import styled from 'styled-components';

export const Breadcrumb = styled.li`
    display: inline;
`;
export const Breadcrumbs = styled.div`
    --link-text: ${({ theme }) => theme.colors.brand};
    font-size: 0.625rem;
`;
