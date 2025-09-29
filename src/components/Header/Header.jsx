import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/about">О нас</Link></li>
                        <li><Link to="/movies">Фильмы</Link></li>
                        <li>Залы</li>
                        <li>Сеансы</li>
                    </ul>
                </nav>
            </header>  
        </>
    )
}