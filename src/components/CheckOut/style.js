import styled from "styled-components";

const Main = styled.main`
    width: 100%;
    height: fit-content-height;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 50px;
    position: relative;
    margin-top: 100px;
`;

const Title = styled.h4`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    word-break: normal;
    line-height: 28px;
`;

const Return = styled.h6`
    color: #ffffff;
    font-size: 14px;
    font-weight: 200;
    margin-top: 20px;
`;

const Titles = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const SubTitle = styled.h6`
    color: #ffffff;
    font-size: 18px;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 20px;
`;

const Price = styled.h5`
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`;
export const PriceFinal = styled.h5`
    color: #ffffff;
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 30px;
`;

const Form = styled.form`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: fit-content;
    margin-bottom: 50px;
`;
export const Titlee = styled.h4`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 40px;
`;
const Input = styled.input`
    width: 100%;
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
    width: 100%;
    height: 58px;
    background-color: #393939;
    border: 1px solid var(--color-light-grey);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
`;

const Span = styled.span`
    width: 100%;
    display: flex;
`;

const Select = styled.select`
    width: 100%;
    height: 60px;
    background-color: var(--color-dark-grey);
    border-radius: 30px;
    border: 1px solid var(--color-dark-grey);
    color: #ffffff;
    font-size: 16px;
    font-weight: 200;
    padding-left: 20px;
    margin-bottom: 30px;
`;

const MainButton = styled.button`
    width: 50%;
    height: 60px;
    background-color: #ffffff;
    border-radius: 30px;
    border: 1px solid #ffffff;
    color: var(--color-dark-grey);
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 30px;
    margin-top: 10px;
`;

const Align = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export {Main, Title, SubTitle, Price, Button, Titles, Return, Form, Input, Span, Select, MainButton, Align};