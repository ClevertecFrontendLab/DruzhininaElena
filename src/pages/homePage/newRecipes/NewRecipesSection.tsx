import 'swiper/css';
import 'swiper/css/navigation';

import { Box } from '@chakra-ui/icons';

import { SectionTitle } from '~/common/components/sectionTitle/SectionTitle.tsx';
import { Slider } from '~/common/components/slider/Slider.tsx';

export const NewRecipesSection = () => (
    <Box as='section'>
        <SectionTitle title='Новые рецепты' />
        <Slider />
    </Box>
);
