import { pageElements } from "./pageElements";

const defineApiSearchQuery = () => {
    const usernameInputValue = pageElements.enterUsername.value;
    const apiSearchQuery = `https://api.github.com/users/${usernameInputValue}`;
    return apiSearchQuery;
}

const searchRequest = async (searchQuery) => {
    try {
        const resolved = await fetch(searchQuery);
        if (resolved.status === 200) {
            const data = await resolved.json();
            return data;
        } else {
            return null;
        };

    } catch (error) {
        console.log("this is the error" + error);
    }
}

export { defineApiSearchQuery, searchRequest };