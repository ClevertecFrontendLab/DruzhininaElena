import { IconButton } from '@chakra-ui/react';
import { RefObject } from 'react';

import { ArrowLeft } from '~/icons/otherIcons/ArrowLeft.tsx';
import { ArrowRight } from '~/icons/otherIcons/ArrowRight.tsx';

type NavigationButtonsProps = {
    swiper: RefObject<null>;
};

export const NavigationButtons = ({ swiper }: NavigationButtonsProps) => (
    <>
        <IconButton
            bg='black'
            aria-label='Arrow Left'
            w={{ base: '40px', '2xl': '48px' }}
            h={{ base: '40px', '2xl': '48px' }}
            _hover={{ bg: 'black' }}
            icon={<ArrowLeft boxSize={{ base: '20px', '2xl': '24px' }} />}
            pos='absolute'
            left='-8px'
            top='148px'
            zIndex={9}
            onClick={() => swiper.current?.slidePrev()}
            display={{ base: 'none', xl: 'flex' }}
            data-test-id='carousel-back'
        />
        <IconButton
            bg='black'
            aria-label='Arrow Right'
            w={{ base: '40px', '2xl': '48px' }}
            h={{ base: '40px', '2xl': '48px' }}
            _hover={{ bg: 'black' }}
            icon={<ArrowRight boxSize={{ base: '20px', '2xl': '24px' }} />}
            pos='absolute'
            right='-8px'
            top='148px'
            zIndex={9}
            onClick={() => swiper.current?.slideNext()}
            display={{ base: 'none', xl: 'flex' }}
            data-test-id='carousel-forward'
        />
    </>
);
