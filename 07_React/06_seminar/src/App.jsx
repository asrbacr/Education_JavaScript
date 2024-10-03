import { Provider } from "react-redux";
import "./App.css";
import Form from "./Components/Form/Form";
import TodoList from "./Components/TodoList/TodoList";
import store from "./Redux/store";
import Goods from "./Components/Goods/Goods";
import FavoriteList from "./Components/Goods/FavoriteList";

const products = [
  {
    id: 1,
    name: "Samsung Galaxy S23",
    description:
      "Флагманский смартфон с отличной камерой и производительностью",
    price: 75000,
  },
  {
    id: 2,
    name: "iPhone 15",
    description:
      "Последняя модель iPhone с новыми функциями и улучшенной камерой",
    price: 90000,
  },
  {
    id: 3,
    name: "Google Pixel 8",
    description: "Смартфон с чистым Android и лучшими камерами",
    price: 60000,
  },
  {
    id: 4,
    name: "OnePlus 11",
    description: "Смартфон с высокой производительностью и быстрой зарядкой",
    price: 55000,
  },
  {
    id: 5,
    name: "Xiaomi Mi 13",
    description: "Смартфон с хорошим соотношением цены и качества",
    price: 40000,
  },
];

function App() {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <TodoList />
        <Goods products={products} />
        <FavoriteList products={products}/>
      </div>
    </Provider>
  );
}

export default App;
