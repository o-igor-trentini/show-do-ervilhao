import { DefaultColorsLayout, LessVariables } from "../types/enum";

export const setDarkTheme = () => {
    changeLayoutColor(LessVariables.PrimaryColorLayout, DefaultColorsLayout.Dark)
    changeLayoutColor(LessVariables.SecondaryColorLayout, DefaultColorsLayout.White)
};

export const setLightTheme = () => {
    changeLayoutColor(LessVariables.PrimaryColorLayout, DefaultColorsLayout.White)
    changeLayoutColor(LessVariables.SecondaryColorLayout, DefaultColorsLayout.Dark)
};

export const changeLayoutColor = (varName: string, color: string) => {
    document.documentElement.style.setProperty(`--${varName}`, color)
};

