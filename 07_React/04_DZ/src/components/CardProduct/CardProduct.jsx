import { useContext } from "react";
import s from "./CardProduct.module.scss";

export const ElemCardInList = ({ item }) => {
  return (
    <div className={[s.border]}>
      <img src={item.image_group} alt={item.name} className={s.img} />
      <h2>{item.name}</h2>
    </div>
  );
};

export const CardLists = ({ items }) => {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <ElemCardInList item={item} />
          </li>
        ))}
      </ul>
    </>
  );
};
