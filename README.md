# Notes

Project has been created with Create React App
SCSS has been included in this Application
Tailwind has been included in this Application (https://tailwindcss.com/docs/guides/create-react-app)

Application has been cleared of default comments.

See the 3sidedcube developer test: https://github.com/3sidedcube/web-developer-test

Handling Large Data Chunks: https://stackoverflow.com/questions/71380585/how-to-handle-large-sets-of-data-response-from-an-api-fetch-when-no-size-limit-c

# A brief "Getting Started guide" on how to open the project locally

Instructions / Commands are for MAC OS X and Linux Users.

Pull repository to local

> git pull git@github.com:christophernathaniel/pokemon-go-catch-app.git

Move Directory to the App Folder:

> cd pokemon-go-catch-app

Install your NPM packages with:

> npm install

Install npm serve globally with:

> npm install -g serve

Run serve. If the port 3000 is not used, the URL will likely be http://localhost:3000

> serve -s build

# If you used any particular libraries why did you choose them?

1. useLocalStorage was a LocalStorage library I used to limit API requests and act as a data-holder instead of implementing a Database.
2. SCSS. Although not used to its potential, it has assistend in grouping CSS.
3. Tailwind CSS. This has not been used for the project, and will eventially be removed. It was more efficient to not use a CSS lib for this project.

# Did you have any challenges and if so, how did you overcome them?

1. This is my 2nd project in React. Although many of the concepts I have used are simple, defining a structure, and using react-standard naming convensions - aswell as investigating solutions such as LocalStorage and Icon Libraries took time.

# Did you add any extra features?

1. Pagination. This was to avoid pulling 1,000 results per application request to the API.

# If you had more time, what else would you implement?

1. Caching of Results. This would enable the pagination to be removed, and the API to use less requests. Pagination was used to avoid pulling in every pokemon all at once.
2. Fight!, We have all the stats to put Pokemon against eachother. It wouldn't require too much further effort to have 5 rounds per fight, use the statistics (+20%/-20%) to create a random feel. Abilities may be more complicated to achieve.
3. Better Looking Pokemon! The styling could look great; with good looking stats and more information to other parts of the API.
