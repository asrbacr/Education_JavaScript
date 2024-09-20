import { useParams } from "react-router-dom";

export const DetailPage = ({product}) => {
    const { weight } = useParams();
    const itemProduct = product.find((item) => {
        item.weight === weight;
    });
  return (
    <>
    {console.log(itemProduct)}
            <ul>
        <p>{itemProduct.weight}</p>
        <p>{itemProduct.price}</p>
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
