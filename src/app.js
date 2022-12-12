import { pageElements } from "./js/pageElements";


const defineApiSearchQuery = () => {
    const usernameInputValue = pageElements.enterUsername.value;
    const apiSearchQuery = `https://api.github.com/users/${usernameInputValue}`;
    return apiSearchQuery;
}

const searchRequest = async (searchQuery) => {
    try {
        const resolved = await fetch(searchQuery);
        const data = await resolved.json();
        console.log(data);
        return data;
        /* Pertinent property names are:
        data.avatar_url id="profileImg"
        data.name id="name" 
        data.login id="username"
        data.bio id="bio"
        data.location id="location"
        data.blog 
        data.twitter_username id="twitter"
        data.company 
        data.created_at id="joinedDate"
        data.followers id="followers"
        data.following id="following"
        data.public_repos id="repos"
        */
    } catch (error) {
        console.log(error);
    }
}

const insertProfilePic = data => pageElements.profileImg.setAttribute("src", data.avatar_url);

const formatAndInsertName = data => {
    let nameValue = data.name;
    if (!nameValue) {
        nameValue = data.login;
        nameValue = nameValue.replace(/^@/, "");
    }
    pageElements.name.innerText = nameValue;
}

const formatAndInsertJoinedDate = data => {
    let signupDate = new Date(data.created_at);
    signupDate = signupDate.toLocaleDateString('en-gb', { day: "numeric", month: "short", year: "numeric" });
    pageElements.joinedDate.innerText = signupDate;
}

const insertUsername = data => {
    let username = data.login;
    username = username.replace(/^@/, "");
    pageElements.username.innerText = `@${username}`;
}

const formatAndInsertBio = data => {
    let bioValue = data.bio;
    if (!bioValue) {
        bioValue = "This profile has no bio"
    }
    pageElements.bio.innerText = bioValue;
}

const insertRepos = data => pageElements.repos.innerText = data.public_repos;

const insertFollowers = data => pageElements.followers.innerText = data.followers;

const insertFollowing = data => pageElements.following.innerText = data.following;

const formatAndInsertLocation = data => {
    let locationValue = data.location;
    if (!locationValue) {
        locationValue = "Not Available";
    }
    pageElements.location.innerText = locationValue;
}

const formatAndInsertTwitter = data => {
    let twitterValue = data.twitter_username;
    if (!twitterValue) {
        pageElements.twitter.hidden = true;
        pageElements.twitterNotAvailable.hidden = false;
    } else {
        pageElements.twitter.hidden = false;
        pageElements.twitterNotAvailable.hidden = true;
        pageElements.twitterLink.innerText = twitterValue;
        twitterValue = twitterValue.replace(/^@/, "");
        twitterValue = `https://twitter.com/${twitterValue}`;
        pageElements.twitterLink.setAttribute("href", twitterValue);
    }
}

const formatAndInsertWebsite = data => {
    let websiteValue = data.blog;
    if (!websiteValue) {
        pageElements.website.hidden = true;
        pageElements.websiteNotAvailable.hidden = false;
    } else {
        pageElements.website.hidden = false;
        pageElements.websiteNotAvailable.hidden = true;
        pageElements.websiteLink.setAttribute("href", websiteValue);
        pageElements.websiteLink.innerText = websiteValue;
    }
}

const formatAndInsertCompany = data => {
    let companyValue = data.company;
    if (!companyValue || companyValue[0] !== "@") {
        pageElements.company.hidden = true;
        pageElements.companyNotAvailable.hidden = false;
    } else {
        pageElements.company.hidden = false;
        pageElements.companyNotAvailable.hidden = true;
        pageElements.companyLink.innerText = companyValue;
        console.log(companyValue);
        companyValue = companyValue.replace(/^@/, "");
        console.log(companyValue);
        companyValue = `https://github.com/${companyValue}`;
        pageElements.companyLink.setAttribute("href", companyValue);
    }
}


const manager = async () => {
    const userData = await searchRequest(defineApiSearchQuery());
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
    const searchButton = document.querySelector("#searchButton");
    searchButton.addEventListener("pointerdown", manager);
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