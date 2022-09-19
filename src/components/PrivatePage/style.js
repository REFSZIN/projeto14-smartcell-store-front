import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
`;

const Title = styled.h2`
    color: #ffffff;
    font-weight: 200;
    font-size: 23px;
    text-align: center;
    word-break: normal;
    margin-bottom: 20px;
`;

const Button = styled.button`
    width: 50vw;
    height: 45px;
    background-color: #ffffff;
    color: var(--color-dark-grey);
    border-radius: 30px;
    border: 1px solid #ffffff;
    font-size: 20px;
    font-weight: 400;
    margin-top: 25px;
`;

export {Container, Title, Button};