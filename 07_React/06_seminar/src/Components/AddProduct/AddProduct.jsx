import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/Slices/productSlice";
import s from "./AddProduct.module.css";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [available, setAvailable] = useState(true);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addProduct({ name, description, price: parseFloat(price), available })
    );
    setName("");
    setDescription("");
    setPrice("");
    setAvailable(true);
  };
  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        type="text"
        placeholder="Название товара"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Описание"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Цена"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <label>
        Доступность:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">Добавить товар</button>
    </form>
  );
};

export default AddProduct;
