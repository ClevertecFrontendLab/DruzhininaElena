import { useNavigate } from 'react-router';

import { LastSection } from '~/common/components/lastSection/LastSection.tsx';
import { MainSection } from '~/common/components/mainSection/MainSection.tsx';
import { PageHeaderWithSearch } from '~/common/components/pageHeaderWithSearch/PageHeaderWithSearch.tsx';
import { veganCuisineData } from '~/data/homePage/veganCuisineData.ts';
import { veganCuisineDataShort } from '~/data/homePage/veganCuisineDataShort.ts';
import { selectAllRecipes, selectCategories, selectFilters } from '~/model/selectors.ts';
import { CulinaryBlogs } from '~/pages/homePage/culinaryBlogs/CulinaryBlogs.tsx';
import { NewRecipesSection } from '~/pages/homePage/newRecipes/NewRecipesSection.tsx';
import { TitleSectionWithButton } from '~/pages/homePage/titleSectionWithButton/TitleSectionWithButton.tsx';
import { useAppSelector } from '~/store/hooks.ts';

export const HomePage = () => {
    const navigate = useNavigate();
    const filter = useAppSelector(selectFilters);
    const showTheJuciest = () => {
        navigate('/the-juiciest');
    };

    const recipes = useAppSelector(selectAllRecipes);
    const categories = useAppSelector(selectCategories);

    const getFilteredRecipes = () => {
        let filteredRecipes = recipes;
        if (filter.searchQuery) {
            filteredRecipes = recipes.filter((r) =>
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
        if (filter.drawerAllergenFilter.excludedAllergens.length) {
            filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                    !recipe.ingredients.some((ingredient) =>
                        filter.drawerAllergenFilter.excludedAllergens.some((allergen) =>
                            ingredient.title.toLowerCase().includes(allergen.toLowerCase()),
                        ),
                    ),
            );
        }
        if (filter.selectedCategories.length) {
            filteredRecipes = filteredRecipes.filter((recipe) =>
                recipe.category
                    .map((category) => categories.find((c) => c.nameEn === category)?.name ?? '')
                    .some((cat) => filter.selectedCategories.includes(cat)),
            );
        }
        if (filter.selectedMeatType.length) {
            filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                    recipe.meat &&
                    filter.selectedMeatType.map((i) => i.value).includes(recipe.meat),
            );
        }

        if (filter.selectedSideType.length) {
            filteredRecipes = filteredRecipes.filter(
                (recipe) =>
                    recipe.side &&
                    filter.selectedSideType.map((i) => i.value).includes(recipe.side),
            );
        }
        return filteredRecipes;
    };

    const sortedRecipesByLikes = [...recipes].sort((a, b) => b.likes - a.likes);

    return (
        <>
            <PageHeaderWithSearch title='Приятного аппетита!' />
            {!filter.isSearchModeOnPage && (
                <>
                    <NewRecipesSection />
                    <TitleSectionWithButton onClick={showTheJuciest} />
                    <MainSection
                        buttonTitle='Вся подборка'
                        sizeButton='md'
                        displayButton={{ base: 'block', xl: 'none' }}
                        showRightIcon={true}
                        onClick={showTheJuciest}
                        dataTestId='juiciest-link-mobile'
                        recipes={sortedRecipesByLikes.slice(0, 4)}
                    />
                </>
            )}
            {filter.isSearchModeOnPage && (
                <MainSection
                    buttonTitle='Загрузить еще'
                    sizeButton='md'
                    displayButton={{ base: 'block', xl: 'none' }}
                    onClick={() => {}}
                    recipes={getFilteredRecipes()}
                />
            )}
            <CulinaryBlogs />
            <LastSection
                title='Веганская кухня'
                description='Интересны не только убеждённым вегетарианцам, но и тем, кто хочет  попробовать вегетарианскую диету и готовить вкусные  вегетарианские блюда.'
                firstCardsData={veganCuisineData}
                secondCardsData={veganCuisineDataShort}
            />
        </>
    );
};
