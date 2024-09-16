import { NavLink } from "react-router-dom";

export const AboutPage = () => {
    return (
        <>
            <NavLink to={"/about"}>
                <h1>О нас</h1>
            </NavLink>
        </>
    )
}