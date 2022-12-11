
const defineApiSearchQuery = () => {
    const usernameInputValue = document.querySelector("#enterUsername").value;
    console.log("this is username inptvalue:" + usernameInputValue);
    const apiUrlBase = "https://api.github.com/users/";
    const apiSearchQuery = `${apiUrlBase}${usernameInputValue}`;
    console.log("this is search query: " + apiSearchQuery);
    return apiSearchQuery;
}

const searchRequest = async () => {
    const searchQuery = defineApiSearchQuery();
    try {
        const resolved = await fetch(searchQuery);
        const data = await resolved.json();
        return data;
        /* Pertinent property names are:
        data.name
        data.login
        data.bio
        data.location
        data.blog
        data.twitter_username
        data.company
        data.created_at
        data.followers
        data.following
        data.public_repos
        */
    } catch (error) {
        console.log(error);
    }
}

const executeSearch = () => {
    const searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener("pointerdown", searchRequest);
}
executeSearch();


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