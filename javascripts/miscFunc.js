
export {switchToArtistPage, switchToFrontPage, scrollToTop}
//----------Switch page functions----------//
function switchToArtistPage() {
    document.querySelector("#front-page").classList.add("hidden")
    document.querySelector("#artist-list-page").classList.remove("hidden")
}

function switchToFrontPage() {
    document.querySelector("#artist-list-page").classList.add("hidden")
    document.querySelector("#front-page").classList.remove("hidden")
}

//----------Miscellaneous Functions----------//
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}