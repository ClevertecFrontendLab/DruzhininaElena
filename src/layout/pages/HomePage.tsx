import { useNavigate } from 'react-router';

import { PageHeaderWithSearch } from '~/components/PageHeaderWithSearch.tsx';
import { theJuciestCardsData } from '~/data/homePage/theJuciestCardsData.ts';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { CulinaryBlogs } from '~/layout/main/sections/culinaryBlogs/CulinaryBlogs.tsx';
import { LastSection } from '~/layout/main/sections/LastSection.tsx';
import { MainSection } from '~/layout/main/sections/MainSection.tsx';
import { NewRecipesSection } from '~/layout/main/sections/newRecipes/NewRecipesSection.tsx';
import { TitleSectionWithButton } from '~/layout/main/TitleSectionWithButton.tsx';

export const HomePage = () => {
    const navigate = useNavigate();

    const showTheJuciest = () => {
        navigate('/juciest');
    };

    return (
        <>
            <PageHeaderWithSearch title='Приятного аппетита!' />
            <NewRecipesSection />
            <TitleSectionWithButton onClick={showTheJuciest} />
            <MainSection
                buttonTitle='Вся подборка'
                sizeButton='md'
                displayButton={{ base: 'block', xl: 'none' }}
                mainSectionData={theJuciestCardsData}
                showRightIcon={true}
                onClick={showTheJuciest}
                dataTestId='juiciest-link-mobile'
            />
            <CulinaryBlogs />
            <LastSection
                title='Веганская кухня'
                text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
