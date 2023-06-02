import React, { useState } from 'react'
import { 
  NavContainer, 
  LeftContainer, 
  RightContainer,
  NavInnerContainer,
  NavExtendedContainer, 
  NavLinkContainer,
  NavLink,
  OpenLinkButton,
  NavLinkSmall
} from './NavbarStyles'

const Navbar = () => {
  const [ navButton, setNavButton ] = useState(false);

  return (
    <NavContainer navButton={navButton}>
      <NavInnerContainer>
        <LeftContainer>
          <NavLinkContainer>
            <NavLink to='/'>E-TIKET</NavLink>
          </NavLinkContainer>
        </LeftContainer>
        <RightContainer>
          <NavLinkContainer>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/account'>Account</NavLink>
            <NavLink to='/about'>About Us</NavLink>
            <OpenLinkButton onClick={() => {setNavButton((curr) => !curr)}}>
              { navButton ? <>&#10005;</> : <>&#8801;</>   }
            </OpenLinkButton>
          </NavLinkContainer>
        </RightContainer>
      </NavInnerContainer>      
        {navButton && (
          <NavExtendedContainer>
            <NavLinkSmall to='/'>Home</NavLinkSmall>
            <NavLinkSmall to='/account'>Account</NavLinkSmall>
            <NavLinkSmall to='/about'>About Us</NavLinkSmall>
          </NavExtendedContainer>
        )}      
    </NavContainer>

  )
}

export default Navbar