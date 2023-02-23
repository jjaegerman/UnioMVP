import { useState, useEffect } from 'react';
import { TiGroup, TiPlus } from 'react-icons/ti';
import { Grid, SelectField, Card, Flex, Tabs, TextField, TabItem, Collection, Image, Text, Icon, useTheme, Button } from '@aws-amplify/ui-react';
import fullUnioLogo from "../media/UnioFull.png"
import { useAuthenticator } from '@aws-amplify/ui-react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { signOut } from '../auth/auth';
import { AuthPage } from '../auth/auth';

const Home = () => {
    const [login, setLogin] = useState(false)
    const { route } = useAuthenticator(context => [context.route]);
    return route !== 'authenticated' && login === true ? <AuthPage /> : <HomeContent setLogin={setLogin} />;
}

const MainContent = ({tabIndex}) => {
    if (tabIndex==2) {
        return (<Text>About</Text>)
    } else if (tabIndex==3) {
        return (<Text>Contact</Text>)
    } else {
        return (<Text>Home</Text>)
}}

const HomeContent = ({setLogin}) => {
    const [openDialogue, setOpenDialogue] = useState(false);
    const [tabIndex, setTabIndex] = useState(1)
    const { tokens } = useTheme();
    const mockClubs = [
        {
          title: 'Club1',
          image: null,
          id: 'asdasdn12323sdajn',
        },
        {
          title: 'Club 2',
          id: 'asdassdf122323n',
          image: null
        },
        {
          title: 'Create a new club',
          id: 'createnew',
          image: null,
        }
    ];
    const [clubRadii, setClubRadii] = useState(["100%"])
    useEffect(() => {
        //fetch all user's clubs
        setClubRadii(mockClubs.map(()=>"100%"))
    }, [])

    const { route } = useAuthenticator(context => [context.route]);

    return (
    <>
        <Dialog open={openDialogue} onClose={() => setOpenDialogue(false)}>
        <DialogTitle>Create a New Club</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To create a new club, please enter the required information below. 
            If you wish to be added to a club that already exists, please contact one of their executives.
          </DialogContentText>
          <TextField
            id="name"
            label="Club Name"
          />
          <TextField
            id="acronym"
            label="Club Acronym"
          />
          <SelectField
            label="Category of Club"
            
           >
            <option value="social">Social</option>
            <option value="design">Design</option>
            <option value="networking">Networking</option>
            <option value="athletic">Athletic</option>
            <option value="event">Event</option>
           </SelectField>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialogue(false)}>Cancel</Button>
          <Button onClick={() => setOpenDialogue(false)} variation="primary">Confirm</Button>
        </DialogActions>
      </Dialog>
        <Grid
            columnGap="0.5rem"
            rowGap="0rem"
            templateColumns="1fr 24fr"
            templateRows="0.75fr 15fr 1fr"
        >
            <Card
                columnStart="1"
                columnEnd="-1"
                padding={tokens.space.zero}
            >
                <Tabs
                    backgroundColor={tokens.colors.background.quaternary}
                    currentIndex={tabIndex} onChange={(i) => setTabIndex(i)}
                    justifyContent="center"
                >
                    <Image
                            width="7rem"
                            alt="full Unio logo and name"
                            objectFit="contain"
                            src={fullUnioLogo}
                            marginBottom={tokens.space.xxxs}
                            marginTop = {tokens.space.xxxs}
                            marginRight = "auto"
                            marginLeft = {tokens.space.large}
                    />
                    <TabItem fontSize={tokens.fontSizes.small} title="Home"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="About"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="Contact"/>
                    <Button 
                        onClick = {() => {
                            if (route==="authenticated"){
                                setLogin(false)
                                signOut()
                            } else {
                                setLogin(true)
                            }
                        }}
                        variation = {route==="authenticated"?"default":"primary"}
                        backgroundColor= {route==="authenticated"?tokens.colors.background.secondary:tokens.colors.font.interactive}
                        marginLeft="auto"
                        marginRight= {tokens.space.large}
                        marginBottom={tokens.space.xxxs}
                        marginTop = {tokens.space.xxxs}
                        size="small"
                    >
                        {route==="authenticated"?"Log Out":"Log in"}
                    </Button>
                </Tabs>
            </Card>
            {route==="authenticated" && <Card
                backgroundColor={tokens.colors.background.secondary}
                columnStart="1"
                columnEnd="2"
            >
                <Collection
                    backgroundColor={tokens.colors.background.secondary}
                    items={mockClubs}
                    type="list"
                    direction="column"
                    gap="5px"
                    wrap="nowrap"
                >
                {(item, index) => {
                    return(
                        <Card
                            key={index}
                            borderRadius={clubRadii[index]}
                            height="3rem"
                            width="3rem"
                            variation='elevated'
                            padding={tokens.space.xs}
                            style={{cursor:"pointer"}}
                            onMouseEnter={() => setClubRadii(clubRadii.map((r,i)=>i==index?"30%":"100%"))}
                            onMouseLeave={() => setClubRadii(clubRadii.map((r,i)=>i==index?"100%":r))}
                        >
                            {
                                item.id==="createnew"?
                                    <Icon
                                        objectFit="contain"
                                        height="2rem"
                                        width="2rem"
                                        as={TiPlus}
                                        onClick={() => setOpenDialogue(true)}
                                    />
                                    :item.image===null?
                                        <Icon
                                            objectFit="contain"
                                            height="2rem"
                                            width="2rem"
                                            as={TiGroup}/>
                                        :<Image
                                            src={item.image}
                                            objectFit="contain"
                                            height="2rem"
                                            width="2rem"
                                            borderRadius="100%"
                                        />
                            }
                        </Card>
                )}}
                </Collection>
            </Card>}
            <Card
                columnStart="2"
                columnEnd="-1"
            ><Flex justifyContent="center">
               <MainContent tabIndex={tabIndex}/>
            </Flex></Card>
            <Card
                backgroundColor={tokens.colors.background.quaternary}
                columnStart="1"
                columnEnd="-1"
            >
                Footer
            </Card>
        </Grid>
    </>
    );
}

export default Home;