import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';
import {
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    IconButton,
    useDisclosure,
} from '@chakra-ui/react';

export const BurgerMenu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <IconButton
                aria-label='Open menu'
                icon={<HamburgerIcon />}
                onClick={onOpen}
                display={{ base: 'flex', lg: 'none' }}
                variant='ghost'
                size='lg'
                colorScheme='gray'
                mr={{ sm: '16px', md: '20px' }}
            />

            <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent bg='gray.50' h='50vh'>
                    <DrawerBody pt={4}>
                        <IconButton
                            pos='fixed'
                            top='8px'
                            right='16px'
                            aria-label='Close menu'
                            icon={<CloseIcon />}
                            onClick={onClose}
                            variant='ghost'
                            size='lg'
                        />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    );
};
