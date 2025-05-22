import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import '../components/relevantNewsComponent/relevantNews.css';
import { MainNews } from "../components/relevantNewsComponent/bigNewsCardComponent.jsx";
import { SmallNews } from "../components/relevantNewsComponent/smallNewsCardComponent.jsx";

export function RelevantNewsApp() {
    return (
        <div id="wrapperWE">
            <Header></Header>
            <div className="allPage">
                <main className="mainNews">
                    <MainNews></MainNews>
                    <SmallNews></SmallNews>
                </main>
            </div>
            <Footer></Footer>
        </div>
    )
}