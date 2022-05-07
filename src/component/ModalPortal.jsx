import { createPortal } from "react-dom";

export default function ModalPortal({children, isOpen}) {
    return createPortal(
        children,
        document.getElementById("modal"))
}