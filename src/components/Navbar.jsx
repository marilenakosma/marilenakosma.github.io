import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router'
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { menu, close } from '../assets';

export const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const menuRef = useRef(null);
    const toggleBtnRef = useRef(null);

    const handleMenuKeyDown = (e) => {
        if (!toggle)
            return; // if menu isn't open

        const items = menuRef.current?.querySelectorAll('[role="menuitem"] a');
        if (!items)
            return;

        const itemsArr = Array.from(items);
        const focused = document.activeElement;
        const currentIndex = itemsArr.indexOf(focused);

        if (e.key === 'Escape') {
            setToggle(false);
            toggleBtnRef.current?.focus(); // return focus to the button that opened the menu
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            const next = itemsArr[(currentIndex + 1) % itemsArr.length];
            next?.focus();
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            const prev = itemsArr[(currentIndex - 1 + itemsArr.length) % itemsArr.length];
            prev?.focus();
        }
    }

    useEffect(() => {
        if (toggle) {
            menuRef.current?.querySelector('[role="menuitem"] a')?.focus();
        }
    }, [toggle]);

    return (
        <nav
            className={
                `${styles.paddingX} ${styles.glassBg} ${styles.glassNavbarBorder} w-full flex items-center 
            py-5 fixed top-0 z-20`
            }>
            <a href="#education" className="absolute left-0 top-0 bg-blue-500 text-white py-2 px-4 z-50 transform -translate-y-full focus:translate-y-0 transition">
                Skip to education
            </a>
            <div className="w-full flex justify-between
            items-center max-w-7xl mx-auto">
                <Link
                    to="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0)
                    }}
                >
                    <h2 className="text-white text-base lg:text-lg 
                font-bold cursor-pointer flex">
                        Marilena Kosma
                    </h2>
                </Link>

                <ul className="list-none hidden sm:flex 
                flex-row gap-10">
                    {navLinks.map((link) => (
                        <li
                            key={link.id}
                            className={
                                `${active === link.title
                                    ? "text-white decoration-[#F64FFF] underline"
                                    : "text-secondary"
                                }
                        hover:text-white hover:decoration-[#F64FFF] hover:underline text-base lg:text-lg
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

                {/*
                        PATTERN:
                        - <button> is the interactive element — it gets all ARIA attributes.
                        - The <img> lives INSIDE the button, as a decorative child (alt="").
                        - <span className="sr-only"> provides the label for screen readers
                          instead of aria-label, so it works even if aria-label is missed.
                        - This way:
                            Tab  → focuses the button 
                            Enter/Space → fires onClick 
                            AT announces "Open menu, button" or "Close menu, button" 
                    */}

                <div className="sm:hidden flex flex-1 
                justify-end items-center" >
                    <div className="absolute flex items-center sm:hidden">
                        <button
                            ref={toggleBtnRef}
                            id="menubutton"
                            type="button"
                            aria-expanded={toggle} //aria-expanded tells screen readers what this button controls
                            aria-controls="mobile-menu"
                            aria-haspopup="true"
                            className="relative inline-flex items-center justify-center 
                            rounded-md border-none p-1.5 text-gray-400 
                            hover:bg-white/5 
                            hover:text-white 
                            focus:outline-2 
                            focus:-outline-offset-1 
                            focus:outline-white"
                            onClick={() => setToggle(!toggle)}
                        />
                        <span className="absolute -inset-0.5"></span>
                        <span className="sr-only">
                            {toggle ? "Close menu" : "Open menu"}
                        </span>
                        <img
                            src={toggle ? close : menu}
                            alt=""
                            className="relative w-7 h-7
                            object-contain cursor-pointer"
                            onClick={() => setToggle(!toggle)}
                        >
                        </img>

                    </div>

                    {/*
                        id="mobile-menu" connects to aria-controls on the button above.
                        role="menu" + aria-labelledby="menubutton" is the full ARIA menu pattern.
                        onKeyDown lives on the <ul> so arrow keys and Escape work from any item.
                    */}

                    <div
                        id="mobile-menu"
                        className={`${!toggle ? "hidden" : "flex"} 
                   ${styles.glassBg} ${styles.glassBorder} p-8  absolute top-[60px] 
                   [box-shadow:0_4px_30px_rgba(0,0,0,0.4)]       
                   right-1 mx-4 my-4 min-w-[150px] 
                   z-10 rounded-xl`}
                    >

                        <ul
                            ref={menuRef}
                            role="menu"
                            aria-labelledby="menubutton"
                            onKeyDown={handleMenuKeyDown}
                            className="list-none flex 
                        justify-end items-center flex-1 flex-col gap-4">
                            {navLinks.map((link) => (
                                <li
                                    role="menuitem"
                                    key={link.id}
                                    className={
                                        `${active === link.title
                                            ? "text-white decoration-[#F64FFF] underline"
                                            : "text-secondary"
                                        }
                        font-medium cursor-pointer
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