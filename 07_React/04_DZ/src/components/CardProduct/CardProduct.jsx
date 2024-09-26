import { useContext } from "react";
import s from "./CardProduct.module.scss";
import { Link, useParams } from "react-router-dom";

export const ElemCardInList = ({ item }) => {
  return (
    <div className={[s.border]}>
      <img src={item.image_group} alt={item.name} className={s.img} />
      <h2>{item.name}</h2>
      <Link to={`/product/${item.id}`}>Варианты веса</Link>
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

export const CardWeight = ({item}) => {
  return(
    <li className={[s.border]}>
      <img src={item.image_product} alt={item.weight} className={s.img} />
      <p>Вес: {item.weight} г</p>
      <p>Цена: {item.price},00 руб.</p>
    </li>
  )
}
export const CardWeightList = ({ items }) => {
  return (
    <div>
      <ul>
        {items.option.map((item) => (
          <CardWeight item={item} />
        ))}
      </ul>
    </div>
  );
};

export const DetailPage = ({ items }) => {
  const { id } = useParams();
  const product = items.find(product => product.id === id);

  return (
      <>
        <CardWeightList items={product} />
      </>
  )
}