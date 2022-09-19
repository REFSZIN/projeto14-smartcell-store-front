import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    padding: 50px;
    margin-top: 100px;
`;
export const Price = styled.h5`
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`;
export const Image = styled.img`
    width: 400px;
    height: 400px;
    border: 24px solid var(--color-light-grey);
    border-radius: 30px;
    background-color: var(--color-light-grey);
`;
export const Title = styled.h5`
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
    word-break: normal;
    line-height: 26px;
    margin-top: 32px;
`;
export const AlignItems = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-right: 50px;
    margin-top: 32px;
`;
export const Description = styled.h6`
    color: #ffffff;
    font-size: 18px;
    font-weight: 200;
    margin-bottom: 12px;
`;
export const Button = styled.button`
    width: 80%;
    color: var(--color-dark-grey);
    border: 1px solid #ffffff;
    border-radius: 30px;
    margin-top: 30px;
    height: 60px;
    font-weight: 400;
    font-size: 18px;
`;