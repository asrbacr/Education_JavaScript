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
    const overshootCart = (e) => {
            e.options.map((cart, i) => (
                return (
                    <li key={i}>
                        <img src={cart.image_product} alt={elem.name} />
                        <p>{cart.weight}</p>
                        <p>{cart.price}</p>
                    </li>
                )
            )
        )
    }

    return (
        <div className={st.cards}>
            {data.map((elem)=>{
                return (
                    <div key={elem.id} className={st.card}>
                        <h2>{elem.name}</h2>
                        <img src={elem.image_group} alt={elem.name} className={st.img}/>
                        <ul>
                            {}
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}