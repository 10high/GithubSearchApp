import { pageElements } from "./js/pageElements";
import { defineApiSearchQuery, searchRequest } from "./js/apiFetch";
import { insertProfilePic, formatAndInsertName, formatAndInsertJoinedDate, insertUsername, formatAndInsertBio, insertRepos, insertFollowers, insertFollowing, formatAndInsertLocation, formatAndInsertTwitter, formatAndInsertWebsite, formatAndInsertCompany } from "./js/insertContent";
import { toggleColorScheme } from "./js/colorSchemes";

const manager = async () => {
    const userData = await searchRequest(defineApiSearchQuery());
    if (userData === null) {
        pageElements.errorMessage.hidden = false;
        return;
    }
    pageElements.errorMessage.hidden = true;
    insertProfilePic(userData);
    formatAndInsertName(userData);
    formatAndInsertJoinedDate(userData);
    insertUsername(userData);
    formatAndInsertBio(userData);
    insertRepos(userData);
    insertFollowers(userData);
    insertFollowing(userData);
    formatAndInsertLocation(userData);
    formatAndInsertTwitter(userData);
    formatAndInsertWebsite(userData);
    formatAndInsertCompany(userData);
}



const addEventListeners = () => {
    pageElements.searchButton.addEventListener("pointerdown", manager);
    pageElements.enterUsername.addEventListener("change", manager);
    pageElements.headerButton.addEventListener("pointerdown", toggleColorScheme);
}
addEventListeners();


/* 
Expected behaviour
- On first load, show the profile information for Octocat.
- Display an error message (as shown in the design) if no user is found when a new search is made.
- If a GitHub user hasn't added their name, show their username where the name would be without the @ symbol and again below with the @ symbol.
- If a GitHub user's bio is empty, show the text "This profile has no bio" with transparency added (as shown in the design).
  The lorem ipsum text in the designs shows how the bio should look when it is present.
- If any of the location, website, twitter, or company properties are empty, show the text "Not Available" with transparency added (as shown in the design).
- Website, twitter, and company information should all be links to those resaources. 
  For the company link, it should remove the @ symbol and link to the company page on GitHub. 
  For Octocat, with @github being returned for the company, this would lead to a URL of https://github.com/github. 
  */