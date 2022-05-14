import { useLocation, useParams, useNavigate} from "react-router-dom";
import Button from '@mui/material/Button';
export default function ProductDetail(props) {
    let navigate = useNavigate();
    let location = useLocation();
    let { productId } = useParams();
    const products = [...location.state.products]
    const back = () => {
        navigate("../", products)
    }
    return (
        <>
            <Button variant="contained" onClick={back}>{"뒤로가기"}</Button>
            <label>{products[productId].title}</label>
        </>
    )
}