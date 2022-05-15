import ModalPortal from "./ModalPortal";
import Modal from "./Modal";
import { useState } from 'react';
import {useLocation, useNavigate} from "react-router-dom";

export default function BookForm (props) {
    let navigate = useNavigate();
    let location = useLocation();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [addressDetail, setAddressDetail] = useState("");
    const [phone, setPhoneNumber] = useState("");

    const [isOpen, setOpen] = useState(false);


    const submitHandler = (event) => {
        event.preventDefault()
        navigate("../success")
    }

    const openModal = (event) => {
        event.preventDefault()
        setOpen(true)
    }

    const modalComplete = (address) => {
        console.log(address)
        setAddress(address)
        setOpen(false)
    }

    const onChange = (event) => (handler) => {
        event.preventDefault();
        handler(event.target.value);
    }

    return (
        <div className={"p-10 text-left mt-10"}>
            <form>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" value={email} onChange={ event => onChange(event)(setEmail)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {"이메일"}
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_name" id="floating_name" value={name} onChange={ event => onChange(event)(setName)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {"이름"}
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="tel" pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}" name="floating_phone" id="floating_phone" value={phone} onChange={ event => onChange(event)(setPhoneNumber)}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_phone"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"전화번호"}
                        (010-1234-5678)</label>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="address" id="address" onClick={event => openModal(event)} value={address} onChange={ event => onChange(event)(setAddress)}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="address"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"주소"}
                            </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="addressDetail" id="addressDetail" value={addressDetail} onChange={ event => onChange(event)(setAddressDetail)}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="addressDetail"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"주소상세"}
                            </label>
                    </div>

                </div>
                <button type="submit" onSubmit={submitHandler}
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit
                </button>
            </form>
            <ModalPortal>
                <Modal isOpen={isOpen} callback={modalComplete} onClose={() => setOpen(false)} />
            </ModalPortal>
        </div>
    )
}