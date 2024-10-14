import { useDispatch, useSelector } from "react-redux";
import {
  deleteProduct,
  toggleAvailability,
} from "../../Redux/Slices/productSlice";
import ChangeProduct from "../ChangeProduct/ChangeProduct";
import s from "./ProductList.module.css";

const ProductList = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Список товаров</h2>
      {console.log(products)}
      {products.length === 0 ? (
        <p>Нет товаров</p>
      ) : (
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>Цена: {product.price}</p>
              <p>Доступен для выбора: {product.available ? "Да" : "Нет"}</p>
              <div className={s.border}>
                <button onClick={<ChangeProduct productId={product.id} />}>
                  Внести изменения
                </button>
              </div>
              <button onClick={() => dispatch(toggleAvailability(product.id))}>
                Изменить доступность
              </button>
              <button onClick={() => dispatch(deleteProduct(product.id))}>
                Удалить товар
              </button>
              {console.log("из list ", product)}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ProductList;

// https://github.com/666Racer/HW__React/blob/main/hw6/src/components/ProductList.jsx
