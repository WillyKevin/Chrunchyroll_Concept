
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import "./styles.css";

// import required modules
import { Navigation } from "swiper";

import img2 from "/src/assets/images/taktOpDestinyBanner.jpg"
import video1 from "/src/assets/video/taktOpDestinyVideo.mp4";
import idade from "/src/assets/idade.svg";
import compartilhar from "/src/assets/images/compartilhar.png";
import { Rating } from "@mui/material";

import video2 from "/src/assets/video/violetVideo.mp4";
import img3 from "/src/assets/images/VioletBanner3.png";

import style from "../styles/cardsSwipper.module.scss";


function CardSwipper() {
    const videoRef = useRef(null);

    const handleVideoClick = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
        } else {
            videoRef.current.pause();
        }
    };
    
    return (
        <div className={style.cardSwipper_items}>
            <div className={style.cardSwipper_styles}>
                <>
                    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                        <SwiperSlide>
                            <div className={style.cardBanner_items}>
                                <div className={style.cardBanner_styles}>
                                    <img id={style.card_img} src={img2} alt="cardBanner" />

                                    <div className={style.buttonCard_items}>
                                        <div className={style.buttonCard_styles}>
                                            <h2 id={style.textBanner_button}>ASSISTA JÁ!</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={style.subBanner_items}>
                                <div className={style.subBanner_styles}>
                                    <div className={style.banner_video_styles}>
                                        {/* <video className={style.video_banner_items} autoPlay loop >
                                            <source id={style.video_banner_styles} src={video1} type="video/mp4" />
                                        </video> */}
                                    </div>

                                    <div className={style.informationsBanner_items}>
                                        <div className={style.informationsBanner_styles}>

                                            <div className={style.age_information_items}>
                                                <img id={style.age_information} src={idade} alt="ageInformation" />

                                                <div className={style.language_items}>
                                                    <span className={style.linguagem_tags}>
                                                        Leg | Dub
                                                    </span>
                                                </div>
                                            </div>

                                            <div className={style.rating_star_items}>
                                                <Rating id={style.tag_star} name="half-rating" defaultValue={2.5} precision={0.5} />
                                            </div>

                                            <div className={style.share_icon_items}>
                                                <div className={style.share_icon_styles}>
                                                    <img id={style.share_icon} src={compartilhar} alt="shareIcon" />
                                                </div>
                                            </div>

                                            <div className={style.descriptionBanner_items}>
                                                <div className={style.descriptionBanner_styles}>
                                                    <p id={style.DescriptionAnime}>
                                                        Música é a luz que ilumina o coração das pessoas, e esta "luz" de repente é roubada do mundo.
                                                        O mundo mudou na noite que o Meteorito negro Kuroya caiu do céu.
                                                        Monstros grotescos conhecidos como D2 emergiram do meteorito e começaram a dominar a terra e as pessoas.
                                                        Ao passo que os D2 foram atraídos pelas melodias tocadas pelas pessoas, aos poucos a própria música foi se tornando um tabu.
                                                        Mas, aqueles que se opõem aos monstros apareceram. São "Musicarts", garotas que extraem poder da música.
                                                        Elas possuem as grandes óperas e partituras musicais da história humana e as usam contra os D2.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={style.genere_tag_itens}>
                                                <div className={style.genere_tag_styles}>
                                                    <div className={style.tag_name}>
                                                        <span className={style.tag}>
                                                            Drama
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                            {/* deixar responsivo cards add automatico */}
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className={style.cardBanner_items}>
                                <div className={style.cardBanner_styles}>
                                    <img id={style.card_img} src={img3} alt="cardBanner" />

                                    <div className={style.buttonCard_items}>
                                        <div className={style.buttonCard_styles}>
                                            <h2 id={style.textBanner_button}>ASSISTA JÁ!</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className={style.subBanner_items}>
                                <div className={style.subBanner_styles}>
                                    <div className={style.banner_video_styles}>
                                        <video ref={videoRef} className={style.video_banner_items} autoPlay loop onClick={handleVideoClick}>
                                            <source id={style.video_banner_styles} src={video2} type="video/mp4" />
                                        </video>
                                    </div>

                                    <div className={style.informationsBanner_items}>
                                        <div className={style.informationsBanner2_styles}>

                                            <div className={style.age_information_items}>
                                                <img id={style.age_information} src={idade} alt="ageInformation" />

                                                <div className={style.language_items}>
                                                    <span className={style.linguagem_tags}>
                                                        Leg | Dub
                                                    </span>
                                                </div>
                                            </div>

                                            <div className={style.rating_star_items}>
                                                <Rating id={style.tag_star} name="half-rating" defaultValue={2.5} precision={0.5} />
                                            </div>

                                            <div className={style.share_icon_items}>
                                                <div className={style.share_icon_styles}>
                                                    <img id={style.share_icon} src={compartilhar} alt="shareIcon" />
                                                </div>
                                            </div>

                                            <div className={style.descriptionBanner_items}>
                                                <div className={style.descriptionBanner_styles}>
                                                    <p id={style.DescriptionAnime}>
                                                        Violet Evergarden é um anime que conta a história desta jovem que sobreviveu à Primeira Guerra Mundial na Europa e busca por um sentido na vida.
                                                        Entregue ao Major Gilbert Bougainvillea Daisuke Namikawa, Violet passa a ser treinada e usada como uma arma. Sendo uma pessoa de compaixão, Gilbert a trata com igualdade, uma garota digna de ser tratada como uma pessoa normal,
                                                        ao mesmo tempo que dá procedimento com seu treinamento.
                                                        No período pós-guerra, sem nenhum parente próximo ou qualquer pessoa conhecida fora do campo de batalha, Violet Evergarden se vê obrigada a levar uma vida pacífica.
                                                    </p>
                                                </div>
                                            </div>

                                            <div className={style.genere_tag_itens}>
                                                <div className={style.genere_tag_styles}>
                                                    <div className={style.tag_name}>
                                                        <span className={style.tag}>
                                                            Drama
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </>
            </div>
        </div>
    );
}

export default CardSwipper;