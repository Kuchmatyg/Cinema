import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export const Header = () => {

    return (
        <>
            <header>
                <nav>
                    <ul>
                        <li>О нас</li>
                        <li><Link to="/movies">Фильмы</Link></li>
                        <li>Залы</li>
                        <li>Сеансы</li>
                    </ul>
                </nav>
            </header>  
        </>
    )
}