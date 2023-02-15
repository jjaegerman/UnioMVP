import logo from '../media/logo.svg';
import './Test.css';
import { testCall } from '../calls/lambda'
import { signOut } from '../auth/auth';
import { withAuthenticator } from '@aws-amplify/ui-react';


const Test = () => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Unio
                </p>
                <button onClick={() => testCall()}>Test Call</button>
                <button onClick={() => signOut()}>Log Out</button>
            </header>
        </div>
    );
}

export default withAuthenticator(Test);