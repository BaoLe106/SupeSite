import styled from 'styled-components';

export const NavbarContainer = styled.div`
    display: flex;
    flex-direction: column;
    // justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    // color: black;
    height: 100vh;
    border-right: 2px #cbcd8d solid;
`;

export const NavbarItem = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
    height: 40px;
    width: 160px;
    padding-left: 8px;

    margin-top: 10px;
    margin-bottom: 10px;
    background: ${(props) => (props.open ? '#D9D9D9' : 'none')};
    border-radius: ${(props) => (props.open ? '16px' : 'none')};
    border-style: ${(props) => (props.open ? 'solid' : 'none')};
    border-width: ${(props) => (props.open ? 'thin' : 'none')};
`;

export const NavbarItemContent = styled.h4`
    padding-left: 10px;
`;

export const LogoutButton = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    cursor: pointer;
    height: 40px;
    width: 160px;
    align-items: center;
    margin-bottom: 10px;
`;

export const Hello = styled.h2`
    font-style: italic;
    margin-top: 8px;
    margin-bottom: 16px;
`;