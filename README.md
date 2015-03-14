# jspm_giflooper
========

complete ripoff of [Glen Maddern's excellent jspm introduction video](https://www.youtube.com/watch?v=iukBMY4apvI). Highly recommend you watch this ~10m video. This is mostly a jspm, system.js, traceur learning exercise for moi.

## Build
### Prereqs...
If you don't already have `npm`, get it by installing [node.js](http://nodejs.org/).

**global stuff**...

1. `npm install -g jspm`

**project stuff (repo root)**...

1. `npm install`
1. `jspm install`

### run for fun...

1. `live-server`: hosts the app and does _livereload_

## Dev

* Just do it... _live-server_ will reload on changes

## Recap
* love the idea of a package manager  for client-side stuff
* love the integration of package management and module loader
* love access to ES6 now, Now, NOW :sunglasses:
* seriously love that after you incorporate  _config.js_ you manage your imports my doing `jspm install _same-module_'

Let that last one sink in... you `jspm install npm:jsonp` then just import it...
```
import jsonp from 'jsonp'

class RedditApi {
...
}

export default new RedditApi()
```
:sunglasses:
