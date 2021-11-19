import React from "react"
import styled from "styled-components"

interface Props {
    name: string
    age: number
    profession: string
    location: string
}

const WelcomeCard = (props: Props) => {
    const { name, age, profession, location } = props

    return (
        <Wrapper>
            <Title>Welcome, {name}!</Title> 
            <Paragraph>You are {age} years old, work as a {profession} and live in {location}.</Paragraph>
        </Wrapper>
    )
}

export default WelcomeCard

const Wrapper = styled.div`
    text-align: center;
    max-width: 375px;
    padding: 20px;
    background: rgba(40, 27, 90, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(40px);
    /* Note: backdrop-filter has minimal browser support */

    border-radius: 30px;

    display: grid;
    gap: 8px;
`

const Title = styled.h1`
    font-weight: bold;
    font-size: 24px;
    line-height: 34px;
    color: rgba(255,255,255,0.7);
`

const Paragraph = styled.p`
    font-size: 16px;
    font-style: normal;
    font-weight: normal;
    line-height: 22px;
    letter-spacing: -0.078px;
    color: #FFFFFF;
`