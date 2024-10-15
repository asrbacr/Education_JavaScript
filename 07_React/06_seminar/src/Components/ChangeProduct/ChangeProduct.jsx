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
    <form onSubmit={handlerSubmit} className={s.column}>
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        type="text"
        placeholder="Новое название продукта"
        required
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        type="text"
        placeholder="Новое описание продукта"
        required
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        type="number"
        placeholder="Новая цена продукта"
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
        Применить
      </button>
    </form>
  );
};

export default ChangeProduct;
