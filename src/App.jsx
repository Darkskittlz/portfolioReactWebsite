import React, { useState } from "react";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Works from "./components/works/Works";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";
import Menu from "./components/menu/Menu";
import { GlobalStyle } from "./globalStyles";
import styled from "styled-components";
import { Modal } from "./components/modal/Modal";


const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height:73%;
  background-color: #FFFFFF;
  background-image: linear-gradient(180deg, #FFFFFF 0%, rgb(0, 204, 255) 100%);
`;

const Container2 = styled.div`
  display: flex;
  overflow: hidden;
  justify-content: center;
  height: 27%;
  background-color: #FFFFFF;
  &::-webkit-scrollbar{
    display: none;
  }

  h1{
    font-size: 50px;
    margin-top: 50px;
    &::-webkit-scrollbar{
    display: none;
  }
  }
`;

const Button = styled.button`
  min-width: 100px;
  padding: 16px 32px;
  border-radius: 4px;
  border: none;
  background: #141414;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

export default function App() {
  const [menuOpen,setMenuOpen] = useState(false)

  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Stories />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

function Stories () {
  const [showModal,setShowModal] = useState(false)
  const openModal = () => {
    setShowModal((prev) => !prev)
  };
  return(
    <div className="Stories">
      <Container2><h1>Writing</h1></Container2>
      <Container>
        <Button onClick={openModal}>Darkest Winters Side</Button>
        <Modal showModal={showModal} setShowModal={setShowModal} />
        <GlobalStyle />
      </Container>  
    </div>
  );
};

