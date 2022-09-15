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
`;

const Input = styled.input`
    width: 90vw;
    height: 58px;
    background-color: var(--color-dark-grey);
    border-radius: 30px;
    border: 1px solid var(--color-dark-grey);
    font-size: 16px;
    color: #ffffff;
    padding: 20px;
    font-weight: 400;
    &::placeholder{
        color: var(--color-light-grey);
        font-size: 14px;
    }
    margin-bottom: 13px;
`;

const Button = styled.button`
    width: 90vw;
    height: 58px;
    background-color: #393939;
    border: 1px solid var(--color-light-grey);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
`;

const Title = styled.h4`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
`;

const Subtitle = styled.h4`
    font-size: 14px;
    color: #ffffff;
    font-weight: 200;
`;

export {Input, Main, Form, Button, Title, Subtitle};