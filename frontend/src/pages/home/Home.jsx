import style from "./Home.module.css";
import React from "react";
import CardInfo from "./HomeComponents/CardsInfo";
import Graphics from "./HomeComponents/Graphics";



const Home = () => {

    return (
        <>
            <div className={style.CardInfos}>
                <CardInfo />
            </div>

            <div className={style.Graphics}>
                <Graphics />
            </div>
        </>
    );
};

export default Home;
