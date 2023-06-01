
import style from "../styles/cardsMusic.module.scss";

function CardsMusic() {

    const CardMusicItem = [{
        bannerImage: "/src/assets/images/ReoNaBanner.png",
        titleBanner: "ReoNa"
    }, {
        bannerImage: "/src/assets/images/SayuriBanner.png",
        titleBanner: "Sayuri"
    }, {
        bannerImage: "/src/assets/images/uverWorldBanner.png",
        titleBanner: "UVERworld"
    }, {
        bannerImage: "/src/assets/images/bornoutSyndromesBanner.png",
        titleBanner: "Bornout Syndromes"
    }, {
        bannerImage: "/src/assets/images/LisaBanner.png",
        titleBanner: "LiSa"
    }, {
        bannerImage: "/src/assets/images/queenBeeBanner.png",
        titleBanner: "Queen Bee"
    }]

    return (
        <div className={style.cardsMusic_items}>
            <div className={style.cardsMusic_styles}>
                <div className={style.titulo_Music_items}>
                    <div className={style.titulo_Music_styles}>
                        <h2 id={style.card_Music_titulo1}>Músicos que amamos!</h2>
                        <p id={style.card_Music_titulo2}>Alguns dos músicos favoritos da Crunchroll</p>
                        <div className={style.hr_linha_itens}>
                            <div className={style.hr_linha_styles}></div>
                        </div>
                    </div>

                    <div className={style.cardsMusic_grid}>
                        {CardMusicItem.map((item, index) => (
                            <div className={style.bannerMusic_items}>
                                <div className={style.bannerMusic_styles}>
                                    {/* {Imagem Banner aqui} */}
                                    <img id={style.reona} src={item.bannerImage} alt="bannerImg1" />
                                    {/* title do banner aqui */}
                                    <span className={style.music_title1}>{ item.titleBanner }</span>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>

        </div>

    );
}

export default CardsMusic;