import { LastSection } from '~/common/components/lastSection/LastSection.tsx';
import { MainSection } from '~/common/components/mainSection/MainSection.tsx';
import { PageHeaderWithSearch } from '~/common/components/pageHeaderWithSearch/PageHeaderWithSearch.tsx';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { selectAllRecipes } from '~/model/selectors.ts';
import { useAppSelector } from '~/store/hooks.ts';

export const TheJuciestPage = () => {
    const recipes = useAppSelector(selectAllRecipes);
    const sortedRecipes = [...recipes].sort((a, b) => b.likes - a.likes);

    return (
        <>
            <PageHeaderWithSearch title='Самое сочное' />
            <MainSection
                onClick={() => {}}
                displayButton='block'
                buttonTitle='Загрузить еще'
                sizeButton='md'
                recipes={sortedRecipes}
            />
            <LastSection
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
