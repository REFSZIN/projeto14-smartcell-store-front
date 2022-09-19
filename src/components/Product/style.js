import styled from "styled-components";

const Main = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px;
    position: relative;
`;

const Title = styled.h4`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    position: absolute;
    top: 150px;
    left: 30px;
`;

const TotalFooter = styled.div`
    width: 100%;
    height: 130px;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: var(--color-menu);
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    border-top: 1px solid var(--color-light-grey);
    display: flex;
    justify-content: space-between;
    padding: 35px;
`;

const AlignItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
`;

const SubTitle = styled.h6`
    color: #ffffff;
    font-size: 12px;
    font-weight: 200;
`;

const Price = styled.h5`
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`;

const Button = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    border-radius: 30px;
    width: 250px;
    border: 1px solid var(--color-dark-grey);
    display: flex;
    justify-content: center;
    align-items: center;
`;


export {Main, Title, TotalFooter, AlignItems, SubTitle, Price, Button};