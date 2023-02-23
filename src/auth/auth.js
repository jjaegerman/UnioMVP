import { Auth } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { View, useTheme } from '@aws-amplify/ui-react';


export async function signOut() {
    try {
        await Auth.signOut();
    } catch (error) {
        console.log('error signing out: ', error);
    }
}

export const AuthPage = () => {
    const { tokens } = useTheme();
    return (
        <View style={{
            width: 'auto',
            height: 'auto',
            minHeight: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }} backgroundColor={tokens.colors.background.secondary} direction="column" justifyContent="space-around" alignItems="center" flex={1}>
            <Authenticator/>
        </View>
    )

}