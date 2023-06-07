import LoginAccount from "../../../shared/compontents/loginAccount";

export const LoginComponent: React.FC = () => {
    return (
        <div className="login_bg">
            <div className="login_bg_container">
                {/* criar os components aqui igual na home */}
                <LoginAccount />
            </div>
        </div>
    );
}