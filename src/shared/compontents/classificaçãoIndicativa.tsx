import style from "../styles/classificaçãoIndicativa.module.scss";

import warning from "/src/assets/images/warning.png";

function ClassIndicativa() {
    return (
        <div className={style.classIndicativa_items}>
            <div className={style.classIndicativa_styles}>
                <span>
                    <img id={style.aviso_icon} src={ warning } alt="classIndicativa_icon" />
                </span>
                <div className={style.text_items}>
                    <p id={style.classficaçao_text}>Verifique a classificação Indicativa</p>
                </div>
            </div>
        </div>
    );
}

export default ClassIndicativa;