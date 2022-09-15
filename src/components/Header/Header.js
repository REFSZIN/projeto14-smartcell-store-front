import {Main, Title, Icon} from "./style.js";
import {IoPersonOutline, IoCartOutline} from "react-icons/io5";
import {Link} from "react-router-dom";

export default function Header () {
    return (
        <Main>
                <Link to="/login">
                    <Icon>
                        <IoPersonOutline/>
                    </Icon>
                </Link>
                <Link to="/">
                    <Title>SmartCell Store</Title>
                </Link>
                <Link to="/carrinho">
                    <Icon>
                        <IoCartOutline/>
                    </Icon>
                </Link>
            </Main>
    );
}