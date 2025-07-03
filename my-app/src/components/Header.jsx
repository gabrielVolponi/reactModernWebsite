import BtnLogin from "./BtnLogin"

export default function Header(params) {
    return (
        <div id="header" className="flex justify-around items-center" >
            <span className="font-bold text-2xl hover:bg-conic-180 from-pink-400 via-orange-400 to-blue-400 bg-clip-text hover:text-transparent hover:cursor-pointer">
                LogoHere
            </span>
            <ul className="font-bold m-4 flex gap-6 border-black border-4 px-8 py-2 rounded-3xl">
                <li className="hover:scale-110 hover:cursor-pointer">FAQ</li>
                <li className="hover:scale-110 hover:cursor-pointer">How it Works</li>
                <li className="hover:scale-110 hover:cursor-pointer">Prices</li>
                <li className="hover:scale-110 hover:cursor-pointer">Demo</li>
            </ul>
            <BtnLogin/>
        </div>
    )
}

