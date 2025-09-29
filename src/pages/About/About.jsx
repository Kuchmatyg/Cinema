import React from "react";
import Cinema from "../../../public/images/cinema.jpeg"
import "./About.scss"


export const About = () => {

    return (
        <>
            <div className="container">
                <div className="description">
                    <p>Наш кинотеатр "Cinema" предоставляет услуги комфортного времяпрепровождения с друзьями и близками.
                        Большое разнообразие фильмов и мультфильмов по жанру, так что выбирайте, что по душе, и приходите с хорошим настроением.
                    </p>
                    <p>
                        Мы находимся по адресу г.Красноярск, ул.Борисова 30
                    </p>
                </div>
                <div className="cinema-photo">
                    <img className="cinema-img" src={Cinema} />
                </div>
            </div>
        </>
    );
}