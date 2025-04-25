import { ComponentWithAs, IconProps } from '@chakra-ui/react';

import { Grills } from '~/icons/navMenu/Grills.tsx';

import { Desserts } from './navMenu/Desserts.tsx';
import { Drinks } from './navMenu/Drinks.tsx';
import { FirstCourses } from './navMenu/FirstCourses.tsx';
import { KidsCourses } from './navMenu/KidsCourses.tsx';
import { National } from './navMenu/National.tsx';
import { Preparations } from './navMenu/Peparations.tsx';
import { Salads } from './navMenu/Salads.tsx';
import { Sauces } from './navMenu/Sauces.tsx';
import { SecondCourses } from './navMenu/SecondCourses.tsx';
import { Snacks } from './navMenu/Snacks.tsx';
import { TherapeuticNutrition } from './navMenu/TherapeuticNutrition.tsx';
import { Vegan } from './navMenu/Vegan.tsx';

export const iconsMap: Record<string, ComponentWithAs<'svg', IconProps>> = {
    desserts: Desserts,
    drinks: Drinks,
    firstCourses: FirstCourses,
    grills: Grills,
    kidsCourses: KidsCourses,
    national: National,
    preparations: Preparations,
    salads: Salads,
    sauces: Sauces,
    secondCourses: SecondCourses,
    snacks: Snacks,
    therapeuticNutrition: TherapeuticNutrition,
    vegan: Vegan,
};
