import { Link } from "react-router-dom"

export const ListPage = ({products}) => {
    return (
        <>
            {/* <Link to="/">Главная</Link> */}
            <h2>Страница списка товаров</h2>
            <ul>
                {products.map((item) => (
                    <li key={item.id}>
                        <Link to={`/goods/${item.id}`}>{item.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    )
}