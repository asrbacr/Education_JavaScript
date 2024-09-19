import st from "./ParseJson.module.css";
const getData = async (url) => {
    try {
      // ожидание результат работы ф-ции
      const res = await fetch(url);
      const data = await res.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };

export const ParseJson = ({data}) => {

    return (
        <div className={st.cards}>
            {data.map((elem)=> {
                return (
                    <details>
                        <summary key={elem.id} className={st.card}>
                            <h2>{elem.name}</h2>
                            <img src={elem.image_group} alt={elem.name} className={st.img}/>
                        </summary>
                        {elem.option.map((cart, i)=> (
                            <div key={i} className={st.li__list}>
                                <img src={cart.image_product} alt={elem.name} className={st.img} />
                                <div>
                                    <p>Вес: {cart.weight} г</p>
                                    <p>Цена: {cart.price},00 руб</p>
                                </div>
                            </div>
                        ))}
                    </details>
                )
            })}
        </div>
    )
}