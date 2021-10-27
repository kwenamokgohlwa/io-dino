import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

export default function CTAButton(props) {
  const { title, subtitle } = props
  return (
    <Link to="/dino-io">
      <Wrapper>
        <IconWrapper>
          <Icon src="/images/logos/dino-logo-mark.svg" className="icon"/>
        </IconWrapper>
        <TextWrapper>
          <Title>{title}</Title>
          <Subtitle>{subtitle}</Subtitle>
        </TextWrapper>
      </Wrapper>
    </Link>
  )
}

const Wrapper = styled.div`
  width: 280px;
  height: 77px;
  padding: 12px;
  background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
    0px 20px 40px rgba(23, 0, 102, 0.2),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
  border-radius: 8px;
  display: grid;
  grid-template-columns: 53px auto;
  align-items: center;
  gap: 20px;

  *,
  & {
    transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
      0px 30px 60px rgba(23, 0, 102, 0.5),
      inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);

    .icon {
      transform: scale(1.2);
    }
  }
`

const TextWrapper = styled.div`
  display: grid;
  gap: 4px;
`

const Caption2 = styled.p`
  font-weight: 600;
  font-size: 15px;
  line-height: 18px;
  text-transform: uppercase;
`

const Title = styled(Caption2)`
  color: #330066;
`

const SmallText = styled.p`
  font-weight: normal;
  font-size: 13px;
  line-height: 130%;
`

const Subtitle = styled(SmallText)`
  color: #330066;
  opacity: 0.7;
`

const Icon = styled.img`
  width: 36px;
  height: 36px;
`

const IconWrapper = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: grid;
  justify-content: center;
  align-content: center;
  justify-self: center;
  position: relative;
`
