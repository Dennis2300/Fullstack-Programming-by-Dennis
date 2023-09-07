
import { selectArtist } from "./app.js";
import { deleteArtist } from "./restFunc.js";
export {showArtist}

function showArtist(list) {
    document.querySelector("#display-artists").innerHTML = "";

    for (const artist of list) {

        document.querySelector("#display-artists").insertAdjacentHTML("beforeend", 
        /*html*/ `
        <article class="grid-item">
        <div class="grid-item-image">
            <img src="${artist.image}" alt="">
        </div>
        <h3>${artist.name}</h3>
            <p id="short-description">${artist.shortDesc}</p>
        <table class="center">
            <tr>
                <th>Birthday</th>
                <th>Active Since</th>
                <th>Genre</th>
                <th>labels</th>
            </tr>
            <tr>
                <td>${artist.birthday}</td>
                <td>${artist.activeSince}</td>
                <td>${artist.genre}</td>
                <td>${artist.label}</td>
            </tr>
        </table>
        <p class="website-link"><a target="_blank" href="${artist.website}">${artist.website}</a></p>
        <div class="btns">
            <button class = "update-btn btn-styling2" style="background-color: darkgreen">Update</button>
            <button class = "delete-btn btn-styling2" style="background-color: darkred">Delete</button>
        </div>
    </article>
        `
        )
        document.querySelector("#display-artists article:last-child .update-btn").addEventListener("click", () => selectArtist(artist));
        document.querySelector("#display-artists article:last-child .delete-btn").addEventListener("click", () => deleteArtist(artist.id));
    }
 }