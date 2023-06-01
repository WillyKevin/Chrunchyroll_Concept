
import premiumIcon from "/src/assets/images/crown_premium_icon.png";
import avatarIcon from "/src/assets/images/zeroTwo.jpg";

import style from "../styles/headerMenu.module.scss";

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AvatarPerfil from "./avatarPerfil";


function HeaderMenu() {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuNameItems = [{
        nameMenu: "Browse",
        item1: "News",
        item2: "Games",
        item3: "Noticias"
    }, {
        nameMenu: "Mangá",
        item1: "News",
        item2: "Games",
        item3: "Noticias"
    }, {
        nameMenu: "Games",
        item1: "News",
        item2: "Games",
        item3: "Noticias"
    }, {
        nameMenu: "News",
        item1: "News",
        item2: "Games",
        item3: "Noticias"
    }]

    return (
        <>
            <div className={style.bg_items_header}>
                <div className={style.bg_items_styles}>
                    <div className={style.logo_headerMenu_items}>
                        <div className={style.logo_headerMenu_styles}>
                            <img id={style.style_logo} src="/src/assets/images/Chrunchyroll_logo.png" alt="HeaderLogo" />
                        </div>
                    </div>

                    <div className={style.drop_menu_items}>
                        <div className={style.drop_menu_grid}>
                            {menuNameItems.map((item, index) => (
                                <div >
                                    <Button
                                        id="basic-button"
                                        aria-controls={open ? 'basic-menu' : undefined}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined}
                                        onClick={handleClick}
                                        style={{
                                            color: 'white',
                                            transition: 'background-color 0.3s ease',
                                        }}
                                        className={style.buttonStyle}
                                    >
                                        {item.nameMenu}
                                    </Button>
                                    <Menu
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        style={{ color: 'white' }}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose} style={{ color: 'black' }}>{item.item1}</MenuItem>
                                        <MenuItem onClick={handleClose} style={{ color: 'black' }}>{item.item2}</MenuItem>
                                        <MenuItem onClick={handleClose} style={{ color: 'black' }}>{item.item3}</MenuItem>
                                    </Menu>

                                </div>
                            ))}
                        </div>

                        <div className={style.premium_items}>
                            {/* por um display grid aqui para n quebrar e ficar um do lado do outro, perfil e prem */}
                            <div className={style.premium_styles}>
                                <div className={style.premiun_icon}>
                                    <img id={style.icon_styles} src={premiumIcon} alt="premiunIcon" />
                                </div>

                                <div className={style.text1_items}>
                                    <p id={style.text1}>TESTE GRATÍS</p>
                                    <p id={style.text2}>PREMIUM</p>
                                </div>
                            </div>
                        </div>

                        <div className={style.perfil_items}>
                            <div className={style.perfil_name_items}>
                                <p id={style.perfil_name}>Myuki</p>
                            </div>
                            <AvatarPerfil />
                        </div>

                    </div>
                </div>
            </div>


        </>

    );
}

export default HeaderMenu;