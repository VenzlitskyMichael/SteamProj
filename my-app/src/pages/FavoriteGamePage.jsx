import './Achievements.css';
import '../components/favoriteGameComponents/FavoriteGame.css'
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { LastNavigation } from "../components/LastNavigation";
// import components
import { PictureSlider } from '../components/favoriteGameComponents/pictureSliderComponent';
import { GameCardOnTheRight } from '../components/favoriteGameComponents/GameCardOnTheRightComponent';
import { AboutThisGame } from '../components/favoriteGameComponents/aboutThisGameComponent';
import { Achivments } from '../components/accountPageComponents/userAchivmentsCard';
import { CustomerReviews } from '../components/favoriteGameComponents/custumerRewieComponent';

export function FavoriteGame() {
    return (
        <div className="body">
            <Header />
            <main>
                <div id="wrapping">
                    <section>
                        <PictureSlider></PictureSlider>
                    </section>
                    <section>
                        <AboutThisGame></AboutThisGame>
                    </section>
                    <section>
                        <SystemRequirements></SystemRequirements>
                    </section>
                    <section>
                        <Achivments></Achivments>
                    </section>
                    <section>
                        <CustomerReviews></CustomerReviews>
                    </section>
                </div>
                <div id="rigthWrapping">
                    <GameCardOnTheRight></GameCardOnTheRight>                    
                </div>
                <section>
                    <LastNavigation />
                </section>
            </main>
            <Footer />
        </div>
    );
}