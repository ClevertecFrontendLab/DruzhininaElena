import { TabList, Tabs } from '@chakra-ui/icons';
import { Tab } from '@chakra-ui/react';

type Props = {
    tabsList: string[];
};

export const TabMenu = ({ tabsList }: Props) => (
    <Tabs
        mb={6}
        overflow='hidden'
        colorScheme='lime'
        size={{ base: 'sm', md: 'md' }}
        variant='unstyled'
    >
        <TabList
            justifyContent='center'
            whiteSpace='nowrap'
            color='lime.800'
            sx={{
                '& > button:not([aria-selected=true])': {
                    borderBottom: '1px solid',
                    borderColor: 'blackAlpha.200',
                },
                '& > [aria-selected=true]': {
                    borderBottom: '2px solid',
                    borderColor: 'lime.600',
                },
            }}
        >
            {tabsList.map((item, index) => (
                <Tab key={index} _selected={{ color: 'lime.600' }}>
                    {item}
                </Tab>
            ))}
        </TabList>
    </Tabs>
);
