import styled from 'styled-components';

export const HomepageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(16, 1fr);
`;

export const SidebarContainer = styled.div`
    grid-column: span 2;
    background-color: #FEF4E6;
`;

// fix later
export const Logo = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    margin-right: 8px;
    height: 10px;
`;

export const HomepageContent = styled.div`
    display: grid;
    grid-column: span 14;
    grid-template-rows: 1fr 10fr 1fr;
    align-items: center;
    // grid-template-rows: 50px 350px 50px;
`;
