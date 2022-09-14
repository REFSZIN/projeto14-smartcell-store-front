import {Main, Title, Icon} from "./style.js";
import {IoPersonOutline, IoCartOutline} from "react-icons/io5";

export default function Header () {
    return (
        <Main>
                <Icon><IoPersonOutline/></Icon>
                <Title>SmartCell Store</Title>
                <Icon><IoCartOutline/></Icon>
            </Main>
    );
}