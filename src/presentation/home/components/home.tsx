import { useNavigate } from 'react-router-dom';
import HeaderMenu from '../../../shared/compontents/headerMenu';
import CardsMenu from '../../../shared/compontents/cardsHome';
import ClassIndicativa from '../../../shared/compontents/classificaçãoIndicativa';
import CardsAnime from '../../../shared/compontents/cardsAnime';
import CardsMusic from '../../../shared/compontents/cardsMusic';
import CardsLançamento from '../../../shared/compontents/cardsLançamento';
import CardSwipper from '../../../shared/compontents/cardsSwipper';

export const HomeComponent: React.FC = () => {
    return (
        <div className='bg_img_home'>
            <div className='bg_secondary_home'>
                {/* <img id='banner_home' src="/src/assets/images/banner1.jpg" alt="Banner1" /> */}
                <HeaderMenu />
                {/* <CardsMenu /> */}
                <CardSwipper />
                <ClassIndicativa />
                <CardsAnime />
                <CardsMusic />
                <CardsLançamento />
            </div>
        </div>
    );
}