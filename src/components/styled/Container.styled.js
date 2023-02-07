import styled from "styled-components";
import bgtop from '../images/bg-pattern-top.svg';
import bgbottom from '../images/bg-pattern-bottom.svg';

export const Container = styled.div`
    --dark-cyan: hsl(185, 75%, 39%);
    --very-dark-desaturated-blue: hsl(229, 23%, 23%);
    --dark-grayish-blue: hsl(227, 10%, 46%);
    --dark-gray: hsl(0, 0%, 59%);
    display: flex;
    height: 100vh;
    width: 100vw;
    color: #fff;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    font-size: 16px;
    font-family: 'Kumbh Sans', sans-serif;
    background-image: url(${bgtop}), url(${bgbottom});
    background-position: top -450px left -350px, bottom -600px right -300px;
    background-repeat: no-repeat;
    background-color: var(--dark-cyan);
    h4 {
        margin: 10px 100px;
        span {
            color: var(--dark-gray);
        }
    }
    h5 {
        margin: auto 130px;
        color: var(--dark-gray);
    }
    h6 {
        margin: 15px auto 5px;
        font-weight: 600;
        font-size: 18px;
    }
    p {
        font-size: 12px;
        font-weight: 500;
        color: var(--dark-gray);
    }
`