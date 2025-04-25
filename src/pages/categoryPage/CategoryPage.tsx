import { useParams } from 'react-router';

import { LastSection } from '~/common/components/lastSection/LastSection.tsx';
import { MainSection } from '~/common/components/mainSection/MainSection.tsx';
import { PageHeaderWithSearch } from '~/common/components/pageHeaderWithSearch/PageHeaderWithSearch.tsx';
import { dessertsData } from '~/data/veganCuisinePage/dessertsData.ts';
import { dessertsDataShort } from '~/data/veganCuisinePage/dessertsDataShort.ts';
import { selectAllRecipes, selectCategories, selectFilters } from '~/model/selectors.ts';
import { TabMenu } from '~/pages/categoryPage/tabMenu/TabMenu.tsx';
import { useAppSelector } from '~/store/hooks.ts';

export const CategoryPage = () => {
    const categories = useAppSelector(selectCategories);
    const recipes = useAppSelector(selectAllRecipes);
    const filter = useAppSelector(selectFilters);

    const { category, subcategory } = useParams<{ category: string; subcategory: string }>();

    const currentCategory = categories.find((c) => c.id === category);

    if (!currentCategory) {
        return <div>Страница с категорией не найдена</div>;
    }

    const { name, description, subcategories } = currentCategory;

    let filteredRecipes =
        category && subcategory
            ? recipes.filter(
                  (rec) => rec.category.includes(category) && rec.subcategory.includes(subcategory),
              )
            : [];

    if (filter.isSearchModeOnPage) {
        if (filter.searchQuery) {
            filteredRecipes = filteredRecipes.filter((r) =>
                r.title.toLowerCase().includes(filter.searchQuery),
            );
        }
        if (filter.pageAllergenFilter.excludedAllergens.length) {
            filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                    !recipe.ingredients.some((ingredient) =>
                        filter.pageAllergenFilter.excludedAllergens.some((allergen) =>
                            ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                        ),
                    ),
            );
        }
    }

    return (
        <>
            <PageHeaderWithSearch title={name}>{description}</PageHeaderWithSearch>
            <TabMenu subcategories={subcategories} />
            <MainSection
                onClick={() => {}}
                displayButton='block'
                buttonTitle='Загрузить еще'
                sizeButton='md'
                recipes={filteredRecipes}
            />
            <LastSection
                title='Десерты, выпечка'
                description='Без них невозможно представить себе ни современную, ни традиционную  кулинарию. Пироги и печенья, блины, пончики, вареники и, конечно, хлеб - рецепты изделий из теста многообразны и невероятно популярны.'
                firstCardsData={dessertsData}
                secondCardsData={dessertsDataShort}
            />
        </>
    );
};
