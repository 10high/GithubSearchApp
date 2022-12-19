import { pageElements } from "./pageElements";


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
    pageElements.joinedDate.innerText = `Joined ${signupDate}`;
}

const insertUsername = data => {
    let username = data.login;
    username = username.replace(/^@/, "");
    pageElements.username.innerText = `@${username}`;
}

const formatAndInsertBio = data => {
    pageElements.bio.classList.remove("notAvailable");
    let bioValue = data.bio;
    if (!bioValue) {
        bioValue = "This profile has no bio"
        pageElements.bio.classList.add("notAvailable");
    }
    pageElements.bio.innerText = bioValue;
}

const insertRepos = data => pageElements.repos.innerText = data.public_repos;

const insertFollowers = data => pageElements.followers.innerText = data.followers;

const insertFollowing = data => pageElements.following.innerText = data.following;

const formatAndInsertLocation = data => {
    pageElements.location.classList.remove("notAvailable");
    let locationValue = data.location;
    if (!locationValue) {
        locationValue = "Not Available";
        pageElements.location.classList.add("notAvailable");
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

export { insertProfilePic, formatAndInsertName, formatAndInsertJoinedDate, insertUsername, formatAndInsertBio, insertRepos, insertFollowers, insertFollowing, formatAndInsertLocation, formatAndInsertTwitter, formatAndInsertWebsite, formatAndInsertCompany };