import React from "react"
import styled from "styled-components"
import DinoPark from "../grid/DinoPark"

function DinoParkSection() {
  return (
    <Wrapper>
      <ContentWrapper>
        <DinoPark />
      </ContentWrapper>
    </Wrapper>
  )
}

export default DinoParkSection

const Wrapper = styled.div`
  overflow: hidden;
`

const ContentWrapper = styled.div`
  max-width: 1234px;
  margin: 0 auto;
  padding: 200px 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 450px) {
    padding: 150px 20px 250px;
  }
`