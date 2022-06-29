# Liveright project

### _Getting started_

- Run `yarn setup`. this will install dependencies and init .env  
  If any additional setup will be needed in future, please add it in the setup command.
- Run `yarn start` to start the server. Will run om port 8022. Can be customized in .env

### _Project structure_

- `assets` - save assets like media, styles, fonts and translations
- `components` - as the name speak. reusable react components
- `config` - save any project static configuration (like routes etc.)
- `enums` - enums
- `guards` - components wrapper which manage to control user enter to specific page level components, according to user authentication and permissions
- `hoc` - abstract component wrappers
- `hooks` - reusable hooks
- `layouts` - reusable blocks (like header, footer etc.)
- `managers` - classes of group of functions, supposed to manage functionality of specific scope
- `modules` - group of types, components, managers, pipes, etc supposed to manage a specific functionality
- `pages` - page level component
- `pipes` - transformation function to turn given data to required format
- `store` - global state related files - store, reducers and sagas
- `types` - types of objects, used globally in the app
- `wiki` - collection of description of specific functionality in the app

### _Deployment_

The dev and stage servers using [render.com](https://dashboard.render.com/).  
You can login there with your colorelephant gmail account and should be able to access it.  
The dev server deployed automatically on push to dev branch, stage server require manual deployment (button on top right)  
`.env` variables managed from right panel - `env groups`

### _Local cli_

There created a local cli to be used for this project.  
Its installed automatically together with project dependencies.  
Used as keyword `liveright` or just `lr`.  
Details can be found in wiki:

- [Available commands](https://github.com/ColorElephantHQ/liveright-frontend/blob/master/src/wiki/cli/available-command.md)
- [Creating new command](https://github.com/ColorElephantHQ/liveright-frontend/blob/master/src/wiki/cli/create-command.md)

### _Other_

Information about specific features and implementations can be found in [/wiki](https://github.com/ColorElephantHQ/liveright-frontend/blob/master/src/wiki) folder
