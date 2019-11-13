class Meal {
    id: string;
    categoryIds: string[];
    title: string;
    affordability: string;
    complexity: string;
    imageUrl: string;
    duration: number;
    ingredients: string[];
    steps: string[];
    glutenFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
    lactoseFree: boolean;

    constructor(
        id: string,
        categoryIds: string[],
        title: string,
        affordability: string,
        complexity: string,
        imageUrl: string,
        duration: number,
        ingredients: string[],
        steps: string[],
        glutenFree: boolean,
        vegan: boolean,
        vegetarian: boolean,
        lactoseFree: boolean,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.glutenFree = glutenFree;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
        this.lactoseFree = lactoseFree;
    }
}

export default Meal;
