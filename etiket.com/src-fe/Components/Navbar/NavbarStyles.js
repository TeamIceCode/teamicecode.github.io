import styled from 'styled-components';
import { Link } from 'react-router-dom';

/*
color palete
#1A152A - dark blue
#25213B - medyo dark blue
#732E2E - red
#F7D6A6 - cream

*/



export const NavContainer = styled.nav`
    width: 100%;
    height: ${(props) => (props.navButton ? "100vh" : "50px")};
    background-color: #1A152A;
    display: flex;
    flex-direction: column;

    @media (min-width: 700px){
        height: 50px;
    }

`;

export const LeftContainer = styled.div`
    flex: 30%;
    display: flex;
    align-items: center;
    padding-left: 5%;
`

export const RightContainer = styled.div`
    flex: 70%;
    display: flex;
    justify-content: flex-end;
    padding-right: 50px;
`

export const NavInnerContainer = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
`

export const NavLinkContainer = styled.div`
    display: flex;
`

export const NavLink = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;

    @media (max-width: 700px){
        display: none;
    }
`

export const NavLinkSmall = styled(Link)`
    color: white;
    font-size: x-large;
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const OpenLinkButton = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 30px;
    cursor: pointer;

    @media (min-width: 700px){
        display: none;
    }
`

export const NavExtendedContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
    
    @media (min-width: 700px){
        display: none;
    }
`
