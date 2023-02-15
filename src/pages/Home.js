import { useState } from 'react';
import { Grid, Card, Tabs, TabItem, Collection, Image } from '@aws-amplify/ui-react';

const Home = () => {
    const [tabIndex, setTabIndex] = useState(0)
    const mockClubs = [
        {
          title: 'Milford - Room #1',
          badges: ['Waterfront', 'Verified'],
        },
        {
          title: 'Milford - Room #2',
          badges: ['Mountain', 'Verified'],
        },
      ];

    return (
        <Grid
            columnGap="0.5rem"
            rowGap="0.5rem"
            templateColumns="1fr 13fr"
            templateRows="1fr 14fr 1fr"
        >
            <Card
                columnStart="1"
                columnEnd="-1"
            >
                <Tabs
                    currentIndex={tabIndex} onChange={(i) => setTabIndex(i)}
                    justifyContent="flex-start"
                >
                    <TabItem title="Home"/>
                    <TabItem title="About"/>
                    <TabItem title="Contact"/>
                </Tabs>
            </Card>
            <Card
                columnStart="1"
                columnEnd="2"
            >
                <Collection
                items={mockClubs}
                type="list"
                direction="column"
                gap="5px"
                wrap="nowrap"
                >
                {(item, index) => (
                    <Card
                    key={index}
                    borderRadius="small"
                    maxWidth="5rem"
                    variation="outlined"
                    >
                    <Image
                        src="/defaultClub.jpg"
                    />
                    </Card>
                )}
                </Collection>
            </Card>
            <Card
                columnStart="2"
                columnEnd="-1"
            >
                Main
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