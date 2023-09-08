# Music Artist Showcase App by Dennis
The Music Artist CRUD (Create, Read, Update, Delete) App is a web application designed to manage and maintain information about music artists.

## DISCLAIMER!
This software is provided on best-effort basis. And it is a school assignment
### KNOWN BUGS & ISSUES:
1. `event.preventDefault` does not work currently, so the app will go to the front page every time users is creating, updating or deleting.
2. The App does not fit various screen sizes so there might be a lot of things that look out of place.
3. There is currently no search and filter functionality which will be added later

## Installation
1. Clone the repository: <br>
`git clone https://github.com/Dennis2300/Fullstack-Programming-by-Dennis/tree/main`

2. Navigate to the directory: <br>
`cd Fullstack-Programming-by-Dennis`

3. Iniate npm libary: <br>
`npm init -y` <br>
    3.1 eventually check npm version with `npm -v` to know that you have succesfully installed npm

4. Install dependencies: <br>
`npm install cors` <br>
`npm install express`

5. Make sure to write the following command into the package.json script prob: <br>
`"start": "node --watch app.js"` <br>
    5.1 eventually check under dependencies that you have cors and express followed by their version

6. to start the backend server simply just start it with: <br>
`npm start`
