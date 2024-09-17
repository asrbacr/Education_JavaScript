import { Link, useParams, useNavigate } from "react-router-dom"

export const DetailPage = ({ products }) => {
    const { productId } = useParams();
    const navigate = useNavigate();
    const product = products.find(product => product.id === parseInt(productId, 10));
    
    const goBack = () => {
        navigate("/goods");
    }
    return (
        <>
            <p>{product.title}</p>
            <p>{product.price}</p>
            <button onClick={goBack}>вернуться назад</button>
        </>
    )
}