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

const Products = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    margin-top: 80px;
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none; 
    &::-webkit-scrollbar{
        display: none;
    }
`;

const Product = styled.div`
    width: 400px;
    height: 600px;
    border-radius: 50px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 20px 20px;
    padding: 36px;
    position: relative;
`;

const Image = styled.img`
    background-color: var(--color-light-grey);
    width: 100%;
    border: 25px solid var(--color-light-grey);
    border-radius: 50px;
`;

const ProductTitle = styled.h4`
    color: #ffffff;
    font-weight: 600;
    font-size: 20px;
    margin-top: 20px;
`;

const Description = styled.h4`
    color: #ffffff;
    font-weight: 200;
    font-size: 18px;
    margin-top: 20px;
`;

const colors = {
    available: "#ffffff",
    selected: "#03ac00",
    textAvailable: "var(--color-dark-grey)",
    textSelected: "#ffffff"
};

const Value = styled.h6`
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 16px;
    color: ${props => {
        if(props.type === 'positive'){
            return colors.positive;
        } if (props.type === 'negative'){
            return colors.negative;
        }
    }};
`;

const AddCart = styled.button`
    width: 100%;
    height: 40px;
    background-color: ${props => {
        if(props.type === ''){
            return colors.available
        } if (props.type === 'selected'){
            return colors.selected
        }
    }};
    color: ${props => {
        if(props.type === ''){
            return colors.textAvailable
        } if (props.type === 'selected'){
            return colors.textSelected
        }}};
    font-weight: 400;
    font-size: 18px;
    border-radius: 50px;
    border: 1px solid #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
    padding: 0 40px;
`;

const Price = styled.h4`
    color: #ffffff;
    font-weight: 400;
    font-size: 20px;
    margin-top: 20px;
`;

const Loading = styled.img`
    width: 80px;
    height: 80px;
`

export {Main, Products, Product, Image, ProductTitle, Price, AddCart, Description, Loading};