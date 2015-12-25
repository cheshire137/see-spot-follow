# See Spot Follow

This came from an idea by [asiansteev](https://github.com/asiansteev) where he
wanted to follow a person on Spotify, wait a bit, and if they didn't follow
him back, unfollow them. Steve's petty like that. ;)

This doesn't actually do anything yet, I'm just getting started.

## How to Develop

    cp src/components/config.json.example src/components/config.json

Customize src/components/config.json as you like. `redirectUri` should be set
to the URL where your app is running. Make sure you add this to the
'Redirect URIs' section of
[your Spotify app](https://developer.spotify.com/my-applications/). Likewise,
you need the client ID for your Spotify app for the `clientID` field in
config.json.

    npm install
    npm start

Visit [localhost:8000/webpack-dev-server](http://localhost:8000/webpack-dev-server/)
in your browser.
