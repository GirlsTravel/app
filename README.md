# share_overflow

> My remarkable Nuxt.js project

## Build Setup

``` bash
# install dependencies
$ npm run install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



TODO

- Create new post page
- Implement search functionality
- Create search results page
- Login / Sign up page
- Post page
- User page
- User settings
- Allow users to upload profile image


<!-- firebase.json -->
"functions": {
  "predeploy": [
    "npm --prefix \"$RESOURCE_DIR\" run lint"
  ]
},

<!-- package.json -->
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},

<!-- database structure -->
users

usersSettings
