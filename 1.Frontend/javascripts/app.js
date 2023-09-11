
import {createNewArtist, getAllArtists, updateArtist} from "./restFunc.js"
import { showArtist } from "./displayFunc.js";
import { scrollToTop, switchToArtistPage, switchToFrontPage } from "./miscFunc.js";
export {selectArtist, selectedArtist, updateAllArtists, scrollToTop}

let selectedArtist;

window.addEventListener("load", initApp)

function initApp() {
    console.log("App.js is running!");
    updateAllArtists()

    
    //----------Front Page btn & Artist Header btn----------//
    document.querySelector("#front-page-btn").addEventListener("click", switchToArtistPage)
    document.querySelector("#artist-list-btn").addEventListener("click", switchToFrontPage)

    //----------Event listener for Create, Update & Delete----------//
    document.querySelector("#create-artist-form").addEventListener("submit", createNewArtist)
    document.querySelector("#update-artist-form").addEventListener("submit", updateArtist)

    //----------Sort list by name----------//
    document.querySelector("#sortByName").addEventListener("click", sortByName)
}

//----------Show Artists Functions----------//
async function updateAllArtists () {
    const data = await getAllArtists()
    showArtist(data)
}

//----------Used to select an Artists----------//
function selectArtist(artist) {
    console.log("Artist selected!");
    selectedArtist = artist;
    const form = document.querySelector("#update-artist-form");
    form.name.value = artist.name;
    form.shortDesc.value = artist.shortDesc;
    form.birthday.value = artist.birthday;
    form.activeSince.value = artist.activeSince;
    form.genre.value = artist.genre;
    form.label.value = artist.label;
    form.website.value = artist.website;
    form.image.value = artist.image;

    form.scrollIntoView({behavior:"smooth"})
}

async function sortByName() {
    const artistList = await getAllArtists();
    const sortedArtistsList = artistList.sort((artists1, artist2) => {
        return artists1.name.localeCompare(artist2.name)
    })
    showArtist(sortedArtistsList)
}