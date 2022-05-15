
export default function Header(props) {
     return (
        <div className={"mb-10 grid-cols-2"}>
            <nav className="px-2 bg-white border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-wrap items-center justify-center mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="logo.jpg" className="mr-3 object-contain h-96 w-192" alt="soyoung Logo" />
                    </a>
                </div>
            </nav>
            <div className="w-full md:block md:w-auto" id="mobile-menu" >
                <ul className="flex justify-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a href="/"
                           className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                           aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#"
                           className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 dark:hover:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{"연락하기"}</a>
                    </li>
                </ul>
            </div>
        </div>
)
}