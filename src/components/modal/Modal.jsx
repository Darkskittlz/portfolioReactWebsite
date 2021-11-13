import React, { useRef } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import IMG from "./images/IMG.jpg";

const Background = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const ModalWrapper = styled.div`
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  grid-template-columns: 1fr 1fr;
  display: grid;
  position: fixed;
  z-index: 10;
  width: 100%;
  height: 500px;
  &::-webkit-scrollbar{
    display: none;
  }
`;

const ModalImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  height: 100%;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  background-color: #000000e1;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;

  @media (max-width: 768px) {
    display: none;
  }

`;


const ModalContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  line-height: 1.8;
  color: #141414;
  background-color: #000000e1;
  width: 50%;
  height: 100%;
  position: fixed;
  top: 0;
  
  h1{
    color: white;
    width: 100%;
    font-weight: 700;
    font-size: 35px;
    text-decoration: underline;
    text-align: center;
    /* text-align: center; */
    &::-webkit-scrollbar{
    display: none;
    }
  }

  p {
    margin-bottom: 1rem;
    color: white;
    width: 100%;
    font-size: 17px;
    line-height: normal;
    text-align: center;
    &::-webkit-scrollbar{
    display: none;
    }
  }

  .br {
    display: block;
    margin-bottom: 0.8em;  
  }

  @media (max-width: 768px) {
    width: 100%;
    left: 0;
  }

`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: fixed;
  display: flex;
  top: 19px;
  right: 6px;
  height: 32px;
  width: 40px;
  padding: 0;
  color: white;
  z-index: 10;
`;

export const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `initial` : `translateY(100%)`, 
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };



  return (
    <>
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <ModalImg src={IMG} alt="camera" />
              <ModalContent>
                <h1>Darkest Winters Side</h1>
                <p>I stop and stare up high; the sky is blue.</p>
                <p>For hours I watch the clouds grow dark; it rains.</p>  
                <p>The water runs for miles in twisting hues.</p>  
                <p>Of colors cross the frozen windowpane.</p>  
                <span class="br"></span> 
                <p>Through these four corners framed I watch the ice</p>  
                <p>Of winter play before my lonely eyes.</p>  
                <p>And she, whose faithful heart would not suffice</p>  
                <p>Without her love, betrayed her lover's guise.</p>  
                <span class="br"></span> 
                <p>For faith is pure, but love's what fans the flame</p>  
                <p>That melts this frozen portrait of my soul,</p>  
                <p>And what is lost I now must seek to gain</p>  
                <p>Before indifference rends my sesnses dull.</p> 
                <span class="br"></span> 
                <p>For she who had a heart took up her pride</p>  
                <p>And left me here by darkes winter's side.</p>  
                <p>- Jeremy Neal</p>  
              </ModalContent>
              <CloseModalButton
                aria-lable="Close modal"
                onClick={() => setShowModal((prev) => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null }
    </>
  );
};
