# inu-multi

run multiple effects in [`inu`](https://github.com/ahdinosaur/inu)

```shell
npm install --save inu-multi
```

## usage

### `multi = require('inu-multi')`

### `enhancedApp = multi(app)`

returns an enhanced [`inu`](https://github.com/ahdinosaur/inu) app which modifies `app.run` to allow `app.update` to return an `Array` of effects.

## inspiration

- [`ashaffer/redux-multi`](https://github.com/ashaffer/redux-multi)

## license

The Apache License

Copyright &copy; 2016 Michael Williams

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
