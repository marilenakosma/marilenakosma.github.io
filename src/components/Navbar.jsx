import React, {useEffect,useState} from 'react'
import { Link } from 'react-router'
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { logo,menu,close } from '../assets';

export const Navbar = () =>  {
    const [active,setActive] = useState("");
    const [toggle,setToggle] = useState(false);
    return (
        <nav
        className={
            `${styles.paddingX} w-full flex items-center 
            py-5 fixed top-0 z-20  bg-[rgba(255,255,255,0.2)] 
            [box-shadow:0_4px_30px_rgba(0,0,0,0.5)]
            border border-transparent border-b-neutral-400`
        }>
          {/*}  <nav
        className={
        border-b-[#f36afb]
            `${styles.paddingX} w-full flex items-center 
            py-5 fixed top-0 z-20 bg-[rgba(255,255,255,0.2)] 
            [box-shadow:0_4px_30px_rgba(0,0,0,0.1)] backdrop-filter backdrop-blur-[5px]
            border border-[rgba(255,255,255,0.3)]`
        }></nav> */}
            <div className="w-full flex justify-between
            items-center max-w-7xl mx-auto">
             <Link 
               to="/"
               className="flex items-center gap-2"
               onClick={() => {
                 setActive("");
                 window.scrollTo(0,0)
               }}
              >
                

                { /* < img src={logo} alt="logo" className="w-9 h-9 
                object-contain"> */ }

                <p className="text-white text-[18px] 
                font-bold cursor-pointer flex">
                    Marilena Kosma 
                </p>
             </Link>
             
                <ul className="list-none hidden sm:flex 
                flex-row gap-10">
                {navLinks.map((link) => (
                    <li 
                    key={link.id}
                    className={
                        `${
                            active === link.title
                            ? "text-white"
                            : "text-secondary"
                        }
                        hover:text-white text-[18px]
                        font-medium cursor-pointer`
                    }
                    onClick={() => setActive(link.title)}
                    >
                        <a href={`#${link.id}`}>
                         {link.title}
                        </a>
                    </li>
                ))}
                </ul>

                <div className="sm:hidden flex flex-1 
                justify-end items-center">
                 <img 
                 src={toggle ? close : menu}
                 alt="menu"
                 className="w-7 h-7
                 object-contain cursor-pointer"
                 onClick={() => setToggle(!toggle)} />

                  <div className={`${ !toggle ? "hidden" : "flex"} 
                   p-8  absolute top-[60px] bg-[rgba(255,255,255,0.2)] 
                   [box-shadow:0_4px_30px_rgba(0,0,0,0.8)]
                   border border-neutral-400 backdrop-blur-xl
                   right-1 mx-4 my-2 min-w-[150px] 
                   z-10 rounded-xl`}
                  >

                <ul className="list-none flex 
                justify-end items-center flex-1 flex-col gap-4">
                {navLinks.map((link) => (
                    <li 
                    key={link.id}
                    className={
                        `${
                            active === link.title
                            ? "text-white decoration-[#F64FFF] underline"
                            : "text-white"
                        }
                        font-poppins font-medium cursor-pointer
                        text-[16px] [text-shadow:0_4px_30px_rgba(0,0,0,1)]
                        `
                    }
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(link.title);
                    }}
                    >
                        <a href={`#${link.id}`}>
                         {link.title}
                        </a>
                    </li>
                ))}
                </ul>

                 </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar