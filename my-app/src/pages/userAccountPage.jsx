import '../components/accountPageComponents/userAccountPage.css'; 
import { UserInfo } from '../components/accountPageComponents/userInfo';
import { Achivments } from '../components/accountPageComponents/userAchivmentsCard';
import { GameCollection } from '../components/accountPageComponents/userGameCard';


export function UserAccPage() {
    return (
        <div className="allPage">
            <main className="mainLogin">
                <div className="wrapper">
                    <UserInfo></UserInfo>
                    <Achivments></Achivments>
                    <GameCollection></GameCollection>
                </div>
            </main>
        </div>
    );
}