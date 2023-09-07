
import { selectedArtist, updateAllArtists, scrollToTop } from "./app.js";
export {createNewArtist, getAllArtists, updateArtist, deleteArtist}

const endpoint = "http://localhost:1111";


//---------Fetch All Artist----------//
async function getAllArtists() {
    const response = await fetch(`${endpoint}/artists`)
    const data = await response.json();
    return data;
}

//----------Create Artist Functions----------//
async function createNewArtist(event) {
    event.preventDefault()
    console.log("Create New Artist Clicked!");

    //-----Get All Input Value-----//
    const name = event.target.name.value;
    const shortDesc = event.target.shortDesc.value;
    const birthday = event.target.birthday.value;
    const activeSince = event.target.activeSince.value;
    const genre = event.target.genre.value;
    const label = event.target.label.value;
    const website = event.target.website.value;
    const image = event.target.image.value;

    //-----Create New Artist-----//
    const newArtist = {name, shortDesc, birthday, activeSince, genre, label, website, image}
    const artistAsJson = JSON.stringify(newArtist)
    const response = await fetch(`${endpoint}/artists`, {
        method: "POST",
        body: artistAsJson,
        headers: {"Content-Type": "application/json"}
    })
    
    if (response.ok) {
        updateAllArtists()
        scrollToTop()
    }
    document.querySelector("#create-artist-form").reset()
}

//----------Update Artist Functions----------//
 async function updateArtist(event) {
    event.preventDefault()
    console.log("Update Artist Clicked!");

        //-----Get All Input Value-----//
        const name = event.target.name.value;
        const shortDesc = event.target.shortDesc.value;
        const birthday = event.target.birthday.value;
        const activeSince = event.target.activeSince.value;
        const genre = event.target.genre.value;
        const label = event.target.label.value;
        const website = event.target.website.value;
        const image = event.target.image.value;

        const artistToUpdate = {name, shortDesc, birthday, activeSince, genre, label, website, image}
        const artistAsJson = JSON.stringify(artistToUpdate)
        const response = await fetch(`${endpoint}/artists/${selectedArtist.id}`, {
            method: "PUT",
            body: artistAsJson,
            headers: {"Content-Type": "application/json"}
        }
        );
        if (response.ok) {
            updateAllArtists()
            scrollToTop()
        }
        document.querySelector("#update-artist-form").reset()
}

//----------Delete Artist Function----------//
async function deleteArtist(id) {
    const response = await fetch(`${endpoint}/artists/${id}`, {
        method: "DELETE"
    });
    if (response.ok) {
        updateAllArtists()
    }
}