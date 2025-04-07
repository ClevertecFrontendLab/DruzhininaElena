import { AccordionPanel, Box, Icon, ListItem, UnorderedList } from '@chakra-ui/icons';
import { AccordionButton, AccordionItem } from '@chakra-ui/react';
import { ReactNode, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router';

import { NavMenuArrowClose } from '~/icons/NavMenuArrowClose.tsx';
import { NavMenuArrowOpen } from '~/icons/NavMenuArrowOpen.tsx';

type Props = {
    icon: ReactNode;
    title: string;
    listItems: string[];
    linkTo?: string;
};
export const NavMenuItem = ({ icon, title, listItems, linkTo = '/' }: Props) => {
    const [selected, setSelected] = useState<null | number>(null);

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/') {
            setSelected(null);
        }
    }, [location.pathname]);

    const markerStyles = {
        content: '""',
        position: 'absolute',
        left: '40px',
        h: '24px',
        w: '1px',
        bg: 'lime.300',
    };

    return (
        <>
            <AccordionItem border='none'>
                {({ isExpanded }) => (
                    <>
                        <h3 onClick={() => setSelected(null)}>
                            <AccordionButton
                                as={Link}
                                to={linkTo}
                                fontWeight='500'
                                fontSize='16px'
                                _expanded={{ bg: 'lime.100', fontWeight: '700' }}
                                _hover={{
                                    bg: 'lime.50',
                                }}
                            >
                                <Icon as={icon} boxSize='24px' />
                                <Box flex='1' textAlign='left' ml='12px'>
                                    {title}
                                </Box>
                                {isExpanded ? (
                                    <Icon as={NavMenuArrowOpen} />
                                ) : (
                                    <Icon as={NavMenuArrowClose} />
                                )}
                            </AccordionButton>
                        </h3>
                        <AccordionPanel p={0}>
                            <UnorderedList ml={0}>
                                {listItems.map((item, index) => (
                                    <ListItem
                                        key={index}
                                        p='6px 8px 6px 52px'
                                        listStyleType='none'
                                        position='relative'
                                        _before={markerStyles}
                                        cursor='pointer'
                                        onClick={() => setSelected(index)}
                                        _selected={{
                                            _before: {
                                                w: '8px',
                                                left: '33px',
                                            },
                                        }}
                                        _hover={{
                                            bg: 'lime.50',
                                            _before: {
                                                w: '0',
                                            },
                                        }}
                                        {...(selected === index && { 'data-selected': true })}
                                    >
                                        {item}
                                    </ListItem>
                                ))}
                            </UnorderedList>
                        </AccordionPanel>
                    </>
                )}
            </AccordionItem>
        </>
    );
};
