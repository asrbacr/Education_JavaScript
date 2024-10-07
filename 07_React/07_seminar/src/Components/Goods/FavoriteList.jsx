import { useDispatch, useSelector } from "react-redux";
import Button from "../Button/Button";
import { deleteItem } from "../../Redux/Slices/favoritesSlice";

const FavoriteList = ({ products }) => {
  const favorite = useSelector((state) => state.favorite);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Избранное</h2>
      <ul>
        {products
          .filter((product) => favorite.items.includes(product.id))
          .map(({ id, name, description, price }) => (
            <li key={id}>
              <h3>{name}</h3>
              <p>{description}</p>
              <p>{price}</p>
              <Button
                handlerClick={() => {
                  dispatch(deleteItem(id));
                }}
              >
                Удалить из избранного
              </Button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FavoriteList;
