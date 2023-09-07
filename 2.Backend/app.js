import express, { request, response } from "express"
import cors from "cors"
import fs from "fs/promises"

const app = express()

app.use(cors())
app.use(express.json())
const port = 1111

app.get("/artists", async (request, response) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json")

    const artistList = await fs.readFile("data/artists.json")
    response.end(artistList)
})

app.get("/artists/:id", (request, response) => {
    const id = Number(request.params.id);
    const artistObj = artists.find(artists => artists.id === id);

    response.json(artistObj);
})

app.post("/artists", async (request, response) => {

    const json = await fs.readFile("data/artists.json");
    const artistList = JSON.parse(json)

    const newArtist = {
        id: new Date().getTime(),
        name: request.body.name,
        shortDesc: request.body.shortDesc,
        birthday: request.body.birthday,
        activeSince: request.body.activeSince,
        genre: request.body.genre,
        label: request.body.label,
        website: request.body.website,
        image: request.body.image,
    }

    artistList.push(newArtist)

    const artistJSON = JSON.stringify(artistList)
    await fs.writeFile("data/artists.json", artistJSON)

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json")

    response.end(JSON.stringify(artistJSON))
})

app.put("/artists/:id", async (request, response) => {

    const json = await fs.readFile("data/artists.json");
    const artistList = JSON.parse(json)

    const id = Number(request.params.id);
    const updateArtist = artistList.find(artists => artists.id === id);

    const body = request.body;

    updateArtist.name = body.name;
    updateArtist.shortDesc = body.shortDesc;
    updateArtist.birthday = body.birthday;
    updateArtist.activeSince = body.activeSince;
    updateArtist.genre = body.genre;
    updateArtist.label = body.label;
    updateArtist.website = body.website;
    updateArtist.image = body.image;

    const artistJSON = JSON.stringify(artistList)
    await fs.writeFile("data/artists.json", artistJSON)

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json")

    response.json(artistList)
})

app.delete("/artists/:id", async (request, response) => {

    const json = await fs.readFile("data/artists.json");
    const artistList = JSON.parse(json)


    const id = Number(request.params.id);
    console.log(id);
    const deleteArtist = Number(artistList.findIndex(artistList => artistList.id === id));
    artistList.splice(deleteArtist, 1)

    const artistJSON = JSON.stringify(artistList)
    await fs.writeFile("data/artists.json", artistJSON)

    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json")

    response.end(JSON.stringify(artistJSON))
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost: ${port}`);
})