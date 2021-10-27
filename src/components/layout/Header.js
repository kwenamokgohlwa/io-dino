import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"
import { menuData } from "../../data/menuData"
import MenuButton from "../buttons/MenuButton"
import { useLocation } from "@reach/router"

export default function Header() {
  const location = useLocation();
  const path = location ? location.pathname : ""

  return (
    <Wrapper>
      <Link to="/">
        <div>
            <img src="/images/logos/input-output-logo-mark.svg" alt="logo mark" width="80" height="80" />
        </div>
      </Link>
      <MenuWrapper count={menuData.length} >
        {menuData.map((item, index) => {
          let menuButton = "";
          if (item.link !== path) {
            menuButton = ( 
              <MenuButton
                item={item}
                key={index}
              /> 
            )
          }
          return menuButton;
        })}
      </MenuWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 30px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding: 0 30px;
  align-items: center;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.count}, auto);

  @media (max-width: 768px) {
    gap: 0px;
  }
`

