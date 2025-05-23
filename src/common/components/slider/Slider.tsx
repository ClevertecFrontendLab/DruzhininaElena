import { Box } from '@chakra-ui/icons';
import { useRef } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { NavigationButtons } from '~/common/components/slider/navigationButtons/NavigationButtons.tsx';
import { SliderCard } from '~/common/components/slider/sliderCard/SliderCard.tsx';
import { Recipe } from '~/common/types/types.ts';
import { selectAllRecipes } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

export const Slider = () => {
    function getLatestRecipes(recipesArray: Recipe[]) {
        return [...recipesArray]
            .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
            .slice(0, 10);
    }

    const allRecipes = useAppSelector(selectAllRecipes);
    const swiperRef = useRef(null);

    const latestRecipes = getLatestRecipes(allRecipes);

    return (
        <Box
            mt={{ base: '0.75rem', lg: '1.5rem' }}
            mx={{ base: '-16px', md: 0 }}
            sx={{
                '.swiper-button-next, .swiper-button-prev': {
                    display: 'none',
                },
            }}
        >
            <Box
                pos='relative'
                width='100%'
                sx={{
                    '.swiper-slide': {
                        width: 'auto !important',
                    },
                }}
            >
                <Swiper
                    data-test-id='carousel'
                    modules={[Navigation]}
                    navigation={false}
                    style={{
                        '--swiper-slide-width': 'auto',
                    }}
                    onSwiper={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    speed={0}
                    slidesPerView={3}
                    spaceBetween='12px'
                    breakpoints={{
                        550: {
                            spaceBetween: '12px',
                            slidesPerView: 5,
                        },
                        768: {
                            spaceBetween: '12px',
                            slidesPerView: 8,
                        },
                        1440: {
                            spaceBetween: '12px',
                            slidesPerView: 5,
                        },
                        1920: {
                            spaceBetween: '24px',
                            slidesPerView: 6,
                        },
                    }}
                    loop
                >
                    {latestRecipes.map(
                        (
                            {
                                id,
                                image,
                                title,
                                description,
                                bookmarks,
                                likes,
                                category,
                                subcategory,
                            },
                            index,
                        ) => (
                            <SwiperSlide
                                key={id}
                                style={{ width: 'auto' }}
                                data-test-id={`carousel-card-${index}`}
                            >
                                <SliderCard
                                    id={id}
                                    image={image}
                                    title={title}
                                    description={description}
                                    bookmarks={bookmarks}
                                    likes={likes}
                                    category={category}
                                    subcategory={subcategory}
                                />
                            </SwiperSlide>
                        ),
                    )}
                </Swiper>
                <NavigationButtons swiper={swiperRef} />
            </Box>
        </Box>
    );
};
