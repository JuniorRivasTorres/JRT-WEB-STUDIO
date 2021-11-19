import  React from "react"
import Layout from "../components/layout/layout"
import SEO from "./seo"
//import HeroSection from "../components/sections/HeroSection"
import { NikeCard } from "../components/nikeCard";
import "../App.css";
import styled from "styled-components";
import "../Index.css";
import { AirpodsCard } from "../components/airpodsCard";
import Service from "../components/sections/Service";


const ServicesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: block;
  align-items: inline;
  justify-content: inline;
`;

function Services () {
  return (
    <ServicesContainer>  
    <SEO title="home" />   
    <Layout> 
         <Service />
    </Layout>     
    </ServicesContainer>    
    
  )
}

export default Services;
