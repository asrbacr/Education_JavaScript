import { useDispatch } from "react-redux";
import { changeProduct } from "../../Redux/Slices/productSlice";
import { useState } from "react";
import s from "./ChangeProduct.module.css";

const ChangeProduct = ({ productId }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(
      changeProduct({
        name,
        description,
        price: parseFloat(price),
        available,
        id: productId,
      })
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };

  return (
    <form onSubmit={handlerSubmit}>
      <input
        className={s.column}
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Название продукта"
        required
      />
      <input
        className={s.column}
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Описание продукта"
        required
      />
      <input
        className={s.column}
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="number"
        placeholder="Цена продукта"
        required
      />
      <label>
        Доступность:
        <input
          onChange={(e) => setAvailable(e.target.checked)}
          checked={available}
          type="checkbox"
        />
      </label>
      <button className={s.column} type="submit">
        Изменить продукт
      </button>
    </form>
  );
};

export default ChangeProduct;
