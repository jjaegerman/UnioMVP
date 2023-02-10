import logo from './logo.svg';
import './Home.css';
import { useAuthenticator } from '@aws-amplify/ui-react';


const Home = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Unio
                </p>
                <button onClick={() => useAuthenticator()}>Log Out</button>
            </header>
        </div>
    );
}

export default Home;