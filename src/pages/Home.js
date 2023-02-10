import logo from './logo.svg';
import './Home.css';
import { Auth } from 'aws-amplify';


const Home = () => {
    

    async function signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Unio
                </p>
                <button onClick={() => signOut()}>Log Out</button>
            </header>
        </div>
    );
}

export default Home;