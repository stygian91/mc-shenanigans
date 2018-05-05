# Prerequisites

Have a working mysql server.

# Install & Build

First create and edit the config file `.env`:
```bash
cp .env.example .env
vim .env # or whatever text editor suits your fancy
```

Then install node modules, build frontend files (they go to the `public` directory) and run the express server

```bash
npm install
cd src/frontend
npm install
npm run build # or `npm run dev` in a new console if you want to watch the frontend src for changes
cd ../../
npm run start # you can pass `-p PORT` to change server port
```

You can (and should) use `yarn` in place of `npm`, it's much faster https://yarnpkg.com/en/.

Go to localhost:[PORT] (default is 3000)

API calls to the DB are under the /api route. E.g. `localhost:3000/api/locations/<location>`

Docs for the API routes don't yet exist. In the meantime check `src/api/register-routes.js`