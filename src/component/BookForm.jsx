import ModalPortal from "./ModalPortal";
import Modal from "./Modal";
import { useState } from 'react';

export default function BookForm ({ consumer, setConsumer }) {

    const { name, email, address, addressDetail, phone } = consumer

    const [isOpen, setOpen] = useState(false);

    const updateConsumer = (newProp) => setConsumer({...consumer, ...newProp})

    const openModal = (event) => {
        event.preventDefault()
        setOpen(true)
    }

    const modalComplete = (address) => {
        updateConsumer({address})
        setOpen(false)
    }

    const onChange = (event) => (key) => {
        event.preventDefault();
        updateConsumer({[key]: event.target.value});
    }

    return (
        <div className={"p-10 text-left mt-10"}>
            <form>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="email" name="floating_email" value={email} onChange={ event => onChange(event)("email")}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {"이메일"}
                    </label>
                </div>

                <div className="relative z-0 w-full mb-6 group">
                    <input type="text" name="floating_name" id="floating_name" value={name} onChange={ event => onChange(event)("name")}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        {"이름"}
                    </label>
                </div>
                <div className="relative z-0 w-full mb-6 group">
                    <input type="tel" pattern="[0-1]{3}-[0-9]{4}-[0-9]{4}" name="floating_phone" id="floating_phone" value={phone} onChange={ event => onChange(event)("phone")}
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_phone"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"전화번호"}
                        (010-1234-5678)</label>
                </div>

                <div className="grid xl:grid-cols-2 xl:gap-6">

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="address" id="address" onClick={event => openModal(event)} value={address} onChange={ event => onChange(event)("address")}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="address"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"주소"}
                            </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input type="text" name="addressDetail" id="addressDetail" value={addressDetail} onChange={ event => onChange(event)("addressDetail")}
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="addressDetail"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">{"주소상세"}
                            </label>
                    </div>

                </div>
            </form>
            <ModalPortal>
                <Modal isOpen={isOpen} callback={modalComplete} onClose={() => setOpen(false)} />
            </ModalPortal>
        </div>
    )
}