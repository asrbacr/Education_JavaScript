import { useDispatch } from "react-redux";
import Button from "../Button/Button";
import { addItem } from "../../Redux/Slices/favoritesSlice";

const Goods = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <ul>
      {products.map(({ id, name, description, price }) => (
        <li key={id}>
          <h3>{name}</h3>
          <p>{description}</p>
          <p>{price}</p>
          <Button
            handlerClick={() => {
              dispatch(addItem(id));
            }}
          >
            Добавить в избранное
          </Button>
        </li>
      ))}
    </ul>
  );
};

export default Goods;
