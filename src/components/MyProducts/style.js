import styled from "styled-components";

const Product = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 50px;
    border: 1px solid var(--color-dark-grey);
    background-color: var(--color-dark-grey);
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    padding-right: 5px;
    position: relative;
    margin-bottom: 30px;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    border: 16px solid var(--color-light-grey);
    border-radius: 30px;
    background-color: var(--color-light-grey);
    margin-right: 20px;
`;

const AlignItems = styled.div`
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 50px;
`;

const Title = styled.h5`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
`;

const Description = styled.h6`
    color: #ffffff;
    font-size: 14px;
    font-weight: 200;
`;

const Price = styled.h5`
    color: #ffffff;
    font-size: 16px;
    font-weight: 500;
`;

const Icon = styled.div`
    font-size: 24px;
    position: absolute;
    top: 24px;
    right: 24px;
`;

const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Button = styled.button`
    width: 50vw;
    height: 58px;
    background-color: #393939;
    border: 1px solid var(--color-light-grey);
    border-radius: 30px;
    font-size: 16px;
    font-weight: 400;
    color: #ffffff;
    margin-top: 50px;
`;

const MainTitle = styled.h5`
    color: #ffffff;
    font-size: 22px;
    font-weight: 200;
`;


export {Product, Image, Title, Description, Price, AlignItems, Icon, Main, Button, MainTitle};