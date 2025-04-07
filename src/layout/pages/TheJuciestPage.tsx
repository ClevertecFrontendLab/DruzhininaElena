import { PageHeaderWithSearch } from '~/components/PageHeaderWithSearch.tsx';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { theJuciestPageMainCardsData } from '~/data/theJuciestPage/theJuciestPageMainCardsData.ts';
import { LastSection } from '~/layout/main/sections/LastSection.tsx';
import { MainSection } from '~/layout/main/sections/MainSection.tsx';

export const TheJuciestPage = () => (
    <>
        <PageHeaderWithSearch title='Самое сочное' />
        <MainSection
            onClick={() => {}}
            displayButton='block'
            buttonTitle='Загрузить еще'
            sizeButton='sm'
            mainSectionData={theJuciestPageMainCardsData}
        />
        <LastSection
            title='Веганская кухня'
            text='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
            firstCardsData={veganCuisineData}
            secondCardsData={veganCuisineDataShort}
        />
    </>
);
