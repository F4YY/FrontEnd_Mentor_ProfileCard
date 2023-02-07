import styled from "styled-components";
import card from '../images/bg-pattern-card.svg';

export const StyledCard = styled.article`
  background-color:#fff;
  color: var(---dark-gray);
  height: 370px;
  width: 320px;
  border-radius: 20px;
  box-shadow:
    0 20px 25px -5px rgba(0, 0, 0, 0.2),
    0 10px 10px -5px rgba(0, 0, 0, 0.1);
  position: relative;
`
export const Cardtop = styled.div`
  background-image: url(${card});
  height: 35%;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
`
export const Cardimage = styled.img`
  position: absolute;
  height: 90px;
  width: 90px;
  top: 75px;
  left: 110px;
  border-radius: 50%;
  background: white;
  padding: 5px;
`
export const Cardbottom = styled.div`
  align-items:center;
  margin-top:70px;
  color: var(--very-dark-desaturated-blue);
`
export const Cardinfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  position: absolute;
  bottom: 0;
  padding-bottom: 10px;
  margin-top: 10px;
  border-top-width: 1px;
  border-top-color: var(--dark-gray);
  border-top-style: solid;
`