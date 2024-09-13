import style from "./Box.module.css";

export const Box = ({ children }) => {
    return <div className={style.border}>{children}</div>;
};
