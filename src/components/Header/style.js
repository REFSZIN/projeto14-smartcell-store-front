import styled from "styled-components";

const Main = styled.div`
    width: 100%;
    background-color: var(--color-menu);
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    margin-bottom: 80px;
    padding: 0 30px;
    z-index: 10;
`;

const Title = styled.h3`
    font-size: 28px;
    font-weight: 700;
    color: #ffffff;
`;

const Icon = styled.div`
    color: #ffffff;
    font-size: 28px;
`;

export {Main, Title, Icon};