import Postcode from "./PostCode"

export default function Modal({isOpen, callback}) {
    return isOpen && (
        <div>
            <Postcode callback={callback}/>
        </div>
    )
}