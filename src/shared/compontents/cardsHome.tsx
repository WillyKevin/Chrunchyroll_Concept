import style from "../styles/cardsHome.module.scss";

import img2 from "/src/assets/images/taktOpDestinyBanner.jpg"
import video1 from "/src/assets/video/taktOpDestinyVideo.mp4";
import starAvaliation from "/src/assets/images/rating.png";
import idade from "/src/assets/idade.svg";
import compartilhar from "/src/assets/images/compartilhar.png";
import { Rating } from "@mui/material";

function CardsMenu() {

    return (
        <div className={style.cards_items}>
            <div className={style.cards_styles}>
                <div className={style.banner_card_item}>
                    <div className={style.banner_card_style}>
                        <img id={style.banner_card} src={img2} />
                    </div>
                </div>

                <div className={style.subBanner_items}>
                    <div className={style.subBanner_styles}>
                        <video className={style.video_banner_items} autoPlay loop>
                            <source id={style.video_banner_styles} src={ video1 } type="video/mp4" />
                        </video>

                        <div className={style.description_banner_items}>
                            <div className={style.description_banner_styles}>
                                <div className={style.tag_banner_items}>
                                    <div className={style.tag_banner_styles}>
                                        <div className={style.meta_tags_items}>
                                            <span className={style.idade_tags}>
                                                <img id={style.idade_tag} src={idade} />
                                            </span>
                                            <span className={style.linguagem_tags}>
                                                Leg | Dub
                                            </span>
                                            <span className={style.avaliaçao_tags}>
                                                {/* <img id={style.avaliaçao_tag} src={starAvaliation} alt="avaliaçao_estrelas" /> */}
                                                <Rating id={style.tag_star} name="half-rating" defaultValue={2.5} precision={0.5} />
                                            </span>
                                            <div className={style.compartilhar_anime}>
                                                <div className={style.compartilhar_animes_items}>
                                                    <img id={style.compartilhar_icone} src={ compartilhar } alt="CompartilharAnimes" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className={style.description_text_items}>
                                        <div className={style.description_text_styles}>
                                            <p className={style.description_banner}>
                                                Música é a luz que ilumina o coração das pessoas, e esta "luz" de repente é roubada do mundo.
                                                O mundo mudou na noite que o Meteorito negro Kuroya caiu do céu.
                                                Monstros grotescos conhecidos como D2 emergiram do meteorito e começaram a dominar a terra e as pessoas.
                                                Ao passo que os D2 foram atraídos pelas melodias tocadas pelas pessoas, aos poucos a própria música foi se tornando um tabu.
                                                Mas, aqueles que se opõem aos monstros apareceram. São "Musicarts", garotas que extraem poder da música.
                                                Elas possuem as grandes óperas e partituras musicais da história humana e as usam contra os D2.
                                            </p>
                                        </div>
                                    </div>

                                    <div className={style.type_anime_items}>
                                        <div className={style.type_anime_styles}>
                                            <p className={style.type_anime_text}>Drama</p>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.buttonCard_items}>
                    <div className={style.buttonCard_styles}>
                        <h2 id={style.textBanner_button}>ASSISTA JÁ!</h2>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default CardsMenu;