
import style from "../styles/cardsAnime.module.scss";

function CardsAnime() {

    const bannerTitleItem = [{
        principal_title: "Assista de graça",
        sub_title: "Assista alguns dos nossos títulos mais populares"
    }]

    const cardAnimeItem = [{
        cardAnimeBanner: "/src/assets/images/jujutsuBanner.png",
        animeTitle: "JUJUTSU KAISEN",
        animeLanguage: "Leg | Dub"
    }, {
        cardAnimeBanner: "/src/assets/images/onePieeceBanner.png",
        animeTitle: "One Pieece",
        animeLanguage: "Leg | Dub"
    }, {
        cardAnimeBanner: "/src/assets/images/hunterxHunter.png",
        animeTitle: "Hunter x Hunter",
        animeLanguage: "Leg | Dub"
    }, {
        cardAnimeBanner: "/src/assets/images/spyXfamily.png",
        animeTitle: "SPY x FAMILY",
        animeLanguage: "Leg | Dub"
    }, {
        cardAnimeBanner: "/src/assets/images/Quintupless.png",
        animeTitle: "The Quintessential Quintuplets",
        animeLanguage: "Leg | Dub"
    }, {
        cardAnimeBanner: "/src/assets/images/myHeroAcademia.png",
        animeTitle: "My Hero Academia",
        animeLanguage: "Leg | Dub"
    }]

    return (
        <div className={style.cardsAnime_items}>
            <div className={style.cardsAnime_styles}>
                <div className={style.titulo_card_items}>
                    {bannerTitleItem.map((item, index) => (
                        <div className={style.titulo_card_styles}>
                            <h2 id={style.card_anime_titulo1}>{item.principal_title}</h2>
                            <p id={style.card_anime_titulo2}>{item.sub_title}</p>
                            <div className={style.hr_linha_itens}>
                                <div className={style.hr_linha_styles}></div>
                            </div>
                        </div>
                    ))}

                    <div className={style.cardsAnime_grid}>
                        {cardAnimeItem.map((item, index) => (
                            <div className={style.bannerAnime_items}>
                                <div className={style.bannerAnime_styles}>
                                    <img id={style.jujutsuBanner} src={item.cardAnimeBanner} alt="bannerImg1" />
                                    {/* title do banner aqui */}
                                    <span className={style.anime_title1}>{item.animeTitle}</span>
                                    <p className={style.anime_languague}>{item.animeLanguage}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default CardsAnime;