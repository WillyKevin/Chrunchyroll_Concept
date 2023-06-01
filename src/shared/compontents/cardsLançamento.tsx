
import style from "../styles/cardsLançamento.module.scss";

import PlayIcon from "/src/assets/images/play_icon.png";
import RightIcon from "/src/assets/images/right.png";

function CardsLancamento() {

    return (
        <div className={style.cardsLançamento_items}>
            <div className={style.cardsLançamento_styles}>
                <div className={style.title_lançamentos_items}>
                    <span className={style.icon_lançamento}>
                        <img id={style.card_playIcon} src={ PlayIcon } alt="icon1"/>
                    </span>
                    <span className={style.lançamentos_title}>Novos Lançamentos</span>
                    <span className={style.calendário_title}>Ver Calendário de Lançamentos</span>
                    <div className={style.rightIcon_styles}>
                        <img id={style.rightIcon} src={ RightIcon } alt="setaRightIcon"/>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default CardsLancamento;