# CelerCore Auth

Celer Core Minecraft Profile is a library with data from Minecraft API.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install celercore/auth.

```bash
npm i @celercore/minecraft-profile
```

## Usage

```javascript
const { ProfileMc } = require('@celercore/minecraft-profile')
const express = require('express')

const profileMc = new ProfileMc()

profileMc.getUUID('Notch') // 069a79f444e94726a5befca90e38aaf5
// or
profileMc.getUUID(['Notch', 'Hasanoes']) // [{id:'98e6a03d8ab84b3a86c855b46bb2c5c3',name:'Hasanoes'},{id:'069a79f444e94726a5befca90e38aaf5',name: 'Notch'}]

profileMc.getNameHistory('98e6a03d8ab84b3a86c855b46bb2c5c3') // [{"name": "diamonddino"},{"name": "PolandBOX","changedToAt": 1519931168000}]
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
