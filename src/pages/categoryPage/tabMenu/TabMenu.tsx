import { TabList, Tabs } from '@chakra-ui/icons';
import { Box, Tab, useBreakpointValue } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { Subcategory } from '~/common/types/types.ts';

type Props = {
    subcategories: Subcategory[];
};

export const TabMenu = ({ subcategories }: Props) => {
    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();
    const navigate = useNavigate();

    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const isMobile = useBreakpointValue({ base: true, md: true, lg: false });

    useEffect(() => {
        setActiveTabIndex(subcategories.findIndex((sub) => sub.id === subcategory));
    }, [category, subcategory, subcategories]);

    const onItemClickHandler = (index: number, item: Subcategory) => {
        setActiveTabIndex(index);
        navigate(`/${category}/${item.nameEn}`);
    };

    return (
        <Tabs
            index={activeTabIndex}
            mb={6}
            overflow='hidden'
            colorScheme='lime'
            size={{ base: 'sm', md: 'md' }}
            variant='unstyled'
        >
            <Box
                width='100%'
                overflowX={isMobile ? 'auto' : 'hidden'}
                position='relative'
                css={{
                    '&::-webkit-scrollbar': {
                        display: 'none',
                    },
                    scrollbarWidth: 'none',
                    msOverflowStyle: 'none',
                }}
            >
                <TabList
                    display='flex'
                    flexWrap={isMobile ? 'nowrap' : 'wrap'}
                    justifyContent='center'
                    minWidth={isMobile ? 'max-content' : undefined}
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
                    {subcategories.map((item, index) => (
                        <Tab
                            data-test-id={`tab-${item.nameEn}-${index}`}
                            key={index}
                            _selected={{ color: 'lime.600' }}
                            flexShrink={0}
                            px={4}
                            onClick={() => onItemClickHandler(index, item)}
                        >
                            {item.name}
                        </Tab>
                    ))}
                </TabList>
            </Box>
        </Tabs>
    );
};
