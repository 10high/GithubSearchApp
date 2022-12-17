import { pageElements } from "./pageElements";

const colorVars = {
    isLightMode: true
}

const setDarkMode = () => {
    document.documentElement.style.setProperty("--headerFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--toggleModeFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--toggleModeFontColorHover", `#90A4D4`);
    document.documentElement.style.setProperty("--bodyColor", `#141D2F`);
    document.documentElement.style.setProperty("--searchBGColor", `#1E2A47`);
    document.documentElement.style.setProperty("--searchInputFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--searchInputPlaceholderFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardBGColor", `#1E2A47`);
    document.documentElement.style.setProperty("--profileCardNameFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardJoinedFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardBioFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardStatsBGColor", `#141D2F`);
    document.documentElement.style.setProperty("--profileCardStatsHeaderFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardStatsNumberFontColor", `#FFFFFF`);
    document.documentElement.style.setProperty("--profileCardFooterIconLabelFontColor", `#FFFFFF`);
    pageElements.darkmodeToggle.hidden = true;
    pageElements.lightmodeToggle.hidden = false;
    pageElements.profileCard.classList.remove("lightmode--dropshadow");
    pageElements.searchWrapper.classList.remove("lightmode--dropshadow");
}

const setLightMode = () => {
    document.documentElement.style.setProperty("--headerFontColor", `#222731`);
    document.documentElement.style.setProperty("--toggleModeFontColor", `#4B6A9B`);
    document.documentElement.style.setProperty("--toggleModeFontColorHover", `#222731`);
    document.documentElement.style.setProperty("--bodyColor", `#F6F8FF`);
    document.documentElement.style.setProperty("--searchBGColor", `#FEFEFE`);
    document.documentElement.style.setProperty("--searchInputFontColor", `#222731`);
    document.documentElement.style.setProperty("--searchInputPlaceholderFontColor", `#4B6A9B`);
    document.documentElement.style.setProperty("--profileCardBGColor", `#FEFEFE`);
    document.documentElement.style.setProperty("--profileCardNameFontColor", `#2B3442`);
    document.documentElement.style.setProperty("--profileCardJoinedFontColor", `#697C9A`);
    document.documentElement.style.setProperty("--profileCardBioFontColor", `#4B6A9B`);
    document.documentElement.style.setProperty("--profileCardStatsBGColor", `#F6F8FF`);
    document.documentElement.style.setProperty("--profileCardStatsHeaderFontColor", `#4B6A9B`);
    document.documentElement.style.setProperty("--profileCardStatsNumberFontColor", `#2B3442`);
    document.documentElement.style.setProperty("--profileCardFooterIconLabelFontColor", `#4B6A9B`);
    pageElements.darkmodeToggle.hidden = false;
    pageElements.lightmodeToggle.hidden = true;
    pageElements.profileCard.classList.add("lightmode--dropshadow");
    pageElements.searchWrapper.classList.add("lightmode--dropshadow");
}

const toggleColorScheme = () => {
    if (!colorVars.isLightMode) {
        colorVars.isLightMode = true;
        setLightMode();
    } else {
        colorVars.isLightMode = false;
        setDarkMode();
    }
}

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    toggleColorScheme();
}

export { toggleColorScheme }