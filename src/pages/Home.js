import { useState } from 'react';
import { TiGroup, TiPlus } from 'react-icons/ti';
import { Grid, Card, Tabs, TabItem, Collection, Image, Text, Flex, Icon, useTheme } from '@aws-amplify/ui-react';
import fullUnioLogo from "../media/UnioFull.png"

const Home = () => {
    const [tabIndex, setTabIndex] = useState(1)
    const { tokens } = useTheme();
    const mainContent = () => {
    if (tabIndex==2) {
        return (<Text>About</Text>)
    } else if (tabIndex==3) {
        return (<Text>Contact</Text>)
    } else {
        return (<Text>Home</Text>)
    }}
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
                    justifyContent="flex-start"
                >
                    <TabItem 
                        title={<Image
                            width="7rem"
                            alt="full Unio logo and name"
                            objectFit="contain"
                            src={fullUnioLogo}
                        />} 
                        isDisabled={true} 
                        paddingBottom={tokens.space.zero}
                        paddingTop = {tokens.space.xxxs}
                        paddingRight = {tokens.space.large}
                    />
                    <TabItem fontSize={tokens.fontSizes.small} title="Home"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="About"/>
                    <TabItem fontSize={tokens.fontSizes.small} title="Contact"/>
                </Tabs>
            </Card>
            <Card
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
                {(item, index) => (
                    <Card
                        key={index}
                        borderRadius="100%"
                        height="3rem"
                        width="3rem"
                        padding={tokens.space.xs}
                    >
                        {
                            item.id=="createnew"?
                                <Icon
                                    objectFit="contain"
                                    height="2rem"
                                    width="2rem"
                                    as={TiPlus}
                                />
                                :item.image==null?
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
            </Card>
            <Card
                columnStart="2"
                columnEnd="-1"
            >
               {mainContent()}
            </Card>
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