import styled from "styled-components";

export const Main = styled.main`
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: center;
    padding: 50px;
    position: relative;
    margin-top: 100px;
    padding-bottom: 120px;
`;
export const AlignItems = styled.div`
    height: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-right: 50px;
`;
export const Title = styled.h5`
    color: #ffffff;
    font-size: 22px;
    font-weight: 500;
    word-break: normal;
    line-height: 26px;
`;
export const FirstTitle = styled.h5`
    font-size: 24px;
    color: #ffffff;
    font-weight: 600;
    margin-bottom: 40px;
`;
export const TotalFooter = styled.div`
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
export const SubTitle = styled.h6`
    color: #ffffff;
    font-size: 12px;
    font-weight: 200;
`;
export const Price = styled.h5`
    color: #ffffff;
    font-size: 32px;
    font-weight: 500;
`;
export const Button = styled.button`
    background-color: #ffffff;
    color: #000000;
    font-size: 16px;
    font-weight: 400;
    border-radius: 30px;
    width: 250px;
    height: 60px;
    border: 1px solid var(--color-dark-grey);
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const Product = styled.div`
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
export const Image = styled.img`
    width: 150px;
    height: 150px;
    border: 16px solid var(--color-light-grey);
    border-radius: 30px;
    background-color: var(--color-light-grey);
    margin-right: 20px;
`;
export const Description = styled.h6`
    color: #ffffff;
    font-size: 14px;
    font-weight: 200;
`;
export const Icon = styled.div`
    font-size: 24px;
    position: absolute;
    top: 24px;
    right: 24px;
`;
export const MainTitle = styled.h5`
    color: #ffffff;
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 30px;
    margin-top: 50px;
`;
export const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

