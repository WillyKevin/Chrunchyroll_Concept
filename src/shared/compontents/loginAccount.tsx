
import nekoImg from "/src/assets/images/log-in-yuzu.png";
import chrunchyLogo from "/src/assets/images/ChrunchyrollLogo.png";

import style from "../styles/loginAccount.module.scss";

function LoginAccount() {
    return (
        <div className={style.login_items}>
            <div className={style.login_styles}>
                <div className={style.login_logo_items}>
                    <div className={style.login_logo_styles}>
                        <img id={style.logo_login} src={chrunchyLogo} alt="logoLogin" />
                    </div>
                </div>

                <div className={style.login_title_items}>
                    <div className={style.login_title_sytles}>
                        <h2 id={style.login_name}>Login</h2>
                    </div>
                </div>

                <div className={style.form_container}>
                    <div className={style.email_container}>
                        <label className={style.loginLabel} htmlFor="*">E-mail:</label>
                        <input className={style.loginPlaceLabel} type="e-mail" placeholder="seu e-mail" />
                    </div>

                    <div className={style.password_container}>
                        <label className={style.passLabel} htmlFor="*">Senha:</label>
                        <input className={style.passPlaceLabel} type="password" placeholder="Digite sua senha" />
                    </div>

                    <div className={style.recover_pass_container}>
                        <a id={style.link_container} href="#">
                            <p id={style.text_recover}>Esqueceu a senha?</p>
                        </a>
                    </div>

                    <div className={style.buttonLogin_container}>
                        <button className={style.buttonLogin_styles}>
                            <span className={style.button_text}>Login</span>
                        </button>
                    </div>
                </div>

                <div className={style.neko_container}>
                    <img id={style.neko_img} src={ nekoImg } alt="Neko_Img" />
                </div>

            </div>
        </div>
    );
}

export default LoginAccount;