class FilerSettings {
    glutenFree: boolean;
    lactoseFree: boolean;
    vegan: boolean;
    vegetarian: boolean;

    constructor(
        glutenFree: boolean,
        lactoseFree: boolean,
        vegan: boolean,
        vegetarian: boolean,
    ) {
        this.glutenFree = glutenFree;
        this.lactoseFree = lactoseFree;
        this.vegan = vegan;
        this.vegetarian = vegetarian;
    }
}

export default FilerSettings;
