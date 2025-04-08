import { PageHeaderWithSearch } from '~/components/PageHeaderWithSearch.tsx';
import { TabMenu } from '~/components/TabMenu.tsx';
import { navMenuItemsData } from '~/data/navMenuItemsData.ts';
import { dessertsData } from '~/data/veganCuisinePage/dessertsData.ts';
import { dessertsDataShort } from '~/data/veganCuisinePage/dessertsDataShort.ts';
import { veganCuisinePageMainCardsData } from '~/data/veganCuisinePage/veganCuisinePageMainCardsData.ts';
import { LastSection } from '~/layout/main/sections/LastSection.tsx';
import { MainSection } from '~/layout/main/sections/MainSection.tsx';

export const VeganCuisinePage = () => (
    <>
        <PageHeaderWithSearch title='Веганская кухня'>
            Интересны не только убеждённым вегетарианцам, но и тем, кто хочет попробовать
            вегетарианскую диету и готовить вкусные вегетарианские блюда.
        </PageHeaderWithSearch>
        <TabMenu tabsList={navMenuItemsData[6].listItems} />
        <MainSection
            onClick={() => {}}
            displayButton='block'
            buttonTitle='Загрузить еще'
            sizeButton='md'
            mainSectionData={veganCuisinePageMainCardsData}
        />
        <LastSection
            title='Десерты, выпечка'
            text='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
            firstCardsData={dessertsData}
            secondCardsData={dessertsDataShort}
        />
    </>
);
