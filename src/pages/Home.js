import { useState, useEffect } from 'react';
import { TiGroup, TiPlus } from 'react-icons/ti';
import { Grid, Card, Flex, Tabs, TabItem, Collection, Image, Text, Icon, useTheme, Button } from '@aws-amplify/ui-react';
import fullUnioLogo from "../media/UnioFull.png"
import { Authenticator } from '@aws-amplify/ui-react';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Home = () => {
    const [login, setLogin] = useState(false)
    const { route } = useAuthenticator(context => [context.route]);
    return route !== 'authenticated' && login === true ? <Authenticator /> : <HomeContent setLogin={setLogin} />;
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
    const [tabIndex, setTabIndex] = useState(1)
    const { tokens } = useTheme();
    useEffect(() => {
        console.log(tabIndex);
      }, [tabIndex])

    const { route } = useAuthenticator(context => [context.route]);
    
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

    return (
        <Grid
            columnGap="0.5rem"
            rowGap="0rem"
            templateColumns="1fr 13fr"
            templateRows="0.75fr 14fr 1fr"
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
                            marginLeft = {tokens.space.xs}
                    />
                    <TabItem fontSize={tokens.fontSizes.small} title="Home"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="About"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="Contact"/>
                    <Button 
                        onClick = {() => setLogin(true)}
                        variation = "primary"
                        backgroundColor= {tokens.colors.font.interactive}
                        marginLeft="auto"
                        marginRight= {tokens.space.xs}
                        marginBottom={tokens.space.xxxs}
                        marginTop = {tokens.space.xxxs}
                    >
                        Log in
                    </Button>
                </Tabs>
            </Card>
            {route==="authenticated" && <Card
                backgroundColor={tokens.colors.background.secondary}
                columnStart="1"
                columnEnd="2"
                visible=""
            >
                <Collection
                    backgroundColor={tokens.colors.background.secondary}
                    items={mockClubs}
                    type="list"
                    direction="column"
                    gap="5px"
                    wrap="nowrap"
                >
                {(item, index) => (
                    <Card
                        key={index}
                        borderRadius="100%"
                        height="3rem"
                        width="3rem"
                        padding={tokens.space.xs}
                    >
                        {
                            item.id==="createnew"?
                                <Icon
                                    objectFit="contain"
                                    height="2rem"
                                    width="2rem"
                                    as={TiPlus}
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
                )}
                </Collection>
            </Card>}
            <Card
                columnStart="2"
                columnEnd="-1"
            ><Flex justifyContent="center">
               <MainContent tabIndex={tabIndex}/>
            </Flex></Card>
            <Card
                columnStart="1"
                columnEnd="-1"
            >
                Footer
            </Card>
        </Grid>
    );
}

export default Home;