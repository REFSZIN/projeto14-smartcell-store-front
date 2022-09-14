import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 24px;
`

const Input = styled.input`
    width: 90vw;
    height: 58px;
    background-color: #ffffff;
    border-radius: 5px;
    border: 1px solid #ffffff;
    font-size: 20px;
    color: #000000;
    padding: 15px;
    font-weight: 400;
    &::placeholder{
        color: #000000;
    }
    font-family: var(--font-body);
    margin-bottom: 13px;
`

const Button = styled.button`
    width: 90vw;
    height: 58px;
    background-color: var(--color-button);
    border: 1px solid var(--color-button);
    border-radius: 5px;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    font-family: var(--font-body);
`

export {Input, Main, Form, Button};