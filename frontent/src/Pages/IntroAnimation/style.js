import styled from 'styled-components';

export const AnimationOverlay = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: opacity 350ms ease-out;
  opacity: 1;
`;
export const GifImage = styled.img`
  width: 11.25rem;
  height: 7.23rem;
  display: flex;
`;

export const AnimationDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15rem;
  height: 15rem;
  background: transparent;
  position: relative;
  :before {
    content: '';
    border: 2px dotted #00ba69;
    border-bottom: 4px solid #00ba69;
    border-top: 4px solid #00ba69;
    border-radius: 50%;
    width: 100%;
    height: 100%;
    position: absolute;
    animation: spinning 1.5s infinite linear;
  }
  :after {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -2;
    top: 0px;
    left: 0px;
    border-radius: 50%;
    border: solid 2px #00ba69;
    content: '';
    animation: grow 2s 0.5s infinite ease-out;
  }
`;
