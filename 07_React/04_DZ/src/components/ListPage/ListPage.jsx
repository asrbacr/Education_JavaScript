import { Link, useParams } from "react-router-dom"

export const ListPage = ({products}) => {
    const {product} = useParams();
    const productDetails = products.find((item) => item.id === product);
  return (
    <>
        <ul>
            {products.map((item) => (
                <li key={item.id}>
                    {console.log(item)}
                    <Link to={`/${item.name_en}/`}>{item.name}</Link>
                </li>
            ))}
        </ul>
    </>
)
}
