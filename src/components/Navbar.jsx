import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components'


const MenuButton = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  &:hover div{
    display: block;
  }
`

const Menu = styled.div`
    position: absolute;
    display: none;
`
const MenuName = styled.h2`
  position: absolute ;
`

const Button = styled.button`
  &:hover {
    cursor: pointer;
  }
`


const Navbar = ({localDark, setLocalDark}) => {

  const history = useHistory();

  return (
    <nav className="navbar">
      <MenuButton>
        <MenuName>Menu</MenuName>
        <Menu>
          <Button type="button" onClick={() => {history.push('/Home')}} >Home</Button> 
          <Button type="button" onClick={() => {history.push('/isItDark')}} >Is it Dark?</Button>
          <Button type="button" onClick={() => {history.push('/Prices')}} >Prices</Button>
        </Menu>
      </MenuButton>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={() => setLocalDark(!localDark)}
          className={localDark ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
