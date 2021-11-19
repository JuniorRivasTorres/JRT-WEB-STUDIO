import React from "react"
import styled from "styled-components"
import { NikeCard } from "../nikeCard"
import { AirpodsCard } from "../airpodsCard"


function Service() {
    return (
      <Wrapper>
       
          <CardWrapper>
            <NikeCard />
            <AirpodsCard />
            <NikeCard />
          </CardWrapper>

       
       
     
       
      </Wrapper>
    )
  }

  export default Service
  
  const Wrapper = styled.div`
  max-width: 1200px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  @media (max-width: 650px) {
    display: flex;
    gap: 60px;
    max-width: calc(50% -  1em);
    flex: 0 1 calc(50% - 1em);
  }
`

const ContentWrapper = styled.div`
  max-width: 2000px;
  margin: 0 auto;
  
 
  grid-template-columns:  auto;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px  20px 250px;
  }
`
const CardWrapper = styled.div`
 
  display: flex;
  flex: row;
  padding: 10px;
  width: 80rem;
  overflow: hidden;
  margin-top: 300px;
  justify-content: space-around;
  align-content: center;

  @media (max-width: 450px) {
    grid-template-columns: auto;
    gap: 60px;
    padding: 150px  20px 250px;
  }
 `