import { useLocation, useParams, useNavigate} from "react-router-dom";
export default function ProductDetail(props) {
    let navigate = useNavigate();
    let location = useLocation();
    let { productId } = useParams();
    const products = [...location.state.products]
    const back = () => {
        navigate("../", products)
    }
    return (
        <div>
            <button onClick={back}>{"뒤로가기"}</button>
            <label>{products[productId].title}</label>
        </div>
    )
}