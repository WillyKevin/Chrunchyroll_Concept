
import style from "../styles/pageError.module.scss";

import CrunchyrollLogo from "/src/assets/images/Chrunchyroll_logo.png";
import CrunchyrollError from "/src/assets/images/Crunchyroll_Error.png";

function PageError() {
    return (
        <div className={style.bg_styles_error}>
            <div className={style.headder_items}>
                <div className={style.headder_styles}>
                    <div className={style.logo_items_error}>
                        <img id={style.crunch_logo} src={CrunchyrollLogo} alt="logoCrunchroll" />
                    </div>
                </div>
            </div>

            <div className={style.card_itens_error}>
                <div className={style.card_styles_error}>

                    <div className={style.crunchy_banner_error}>
                        <img id={style.crunchy_error_img} src={CrunchyrollError} alt="Crunchy_Error" />
                    </div>
                </div>

                <div className={style.Banner_itens_error}>
                    <div className={style.Banner_styles_error}>
                        {/* teste */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageError;