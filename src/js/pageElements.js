const pageElementIds = [
    "enterUsername",
    "profileImg",
    "name",
    "username",
    "bio",
    "location",
    "twitter",
    "twitterLink",
    "twitterNotAvailable",
    "joinedDate",
    "followers",
    "following",
    "repos",
    "website",
    "websiteNotAvailable",
    "websiteLink",
    "company",
    "companyNotAvailable",
    "companyLink",
    "errorMessage",
    "searchButton"
]

const pageElements = {}

const populatePageElements = () => {
    for (let id of pageElementIds) {
        let element = document.getElementById(id)
        pageElements[id] = element;
    }
}
populatePageElements();
export { pageElements };