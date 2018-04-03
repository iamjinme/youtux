# YoutuX

Homework from SmartX.net: Search Youtube App with React/ReduX (Yout.uX)

### Getting Started

There are two methods for getting started with this repo.

#### Familiar with Git?
Checkout this repo, install dependencies, then start the gulp process with the following:

```
> git clone https://github.com/mirabalj/youtux.git
> cd youtux
> npm install
> npm start
```

#### Not Familiar with Git?
Click [here](https://github.com/mirabalj/youtux/archive/master.zip) then download the .zip file.  Extract the contents of the zip file, then open your terminal, change to the project directory, and:

```
> npm install
> npm start
```

#### Considerations
YoutuX use an API_KEY to connect to Youtube API, please considerate change this by own one. Change this in `src/actions/index.js`. Don't abuse. Thanks! ;)

### TODO
- Populate each video to get properties: number of views and upvotes. ¿Expensive in performance?
- Create other filter by year with slider
- Refactor some actions/containers to get data from services, don't directly
- Change button My Videos by Tabs ¿It is really necessary?
- Use SASS/SCSS, for now React Bootstrap is enough
- Optimize some things ¿For two and a half days of work, is that okay?