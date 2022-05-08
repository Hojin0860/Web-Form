import { useNavigate } from "react-router-dom";

export default function Account(props) {
    let navigate = useNavigate();
    const back = () => {
        navigate(-1)
    }

    return (
        <div>
            <label>{"예금주 : 정호진"}</label>
            <label>{"계좌번호: 우리은행 1002-529-619302"}</label>
            <button onClick={back}>{"뒤로가기"}</button>
        </div>
    );
}