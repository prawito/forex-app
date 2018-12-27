## How To Run Project Forex-app

1. Open your terminal and clone this repository
2. After cloning process finish, go to `forex-app` folder by using `cd forex-app`
3. Before you run the project, please run `yarn install` first for installing all dependencies
4. After installation process finish, run `yarn start`
5. The Project will run on this url `http://localhost:3000`
6. All development process (assets and code) is under `src` folder
7. I am using `SASS` for CSS preprocessor
8. I also using atomic principle for creating this project. For example I create stateless component under `attom` folder and under `molecules` folder. It is mean the component is very basic so I create that using stateless. Another component that using stateful I put under `organisms`. And for pages I put under `page` folder.
9. For List of currencies I put under `utils/country.json`

**Online Preview :**
For online preview, please check [here](http://dev.prawito.com/).
Please contact me if there is a problem with my dev server (phone: 0857-4755-6971, email: prawitohudoro@gmail.com)

**Note :**
Some devices may be need to install basic requirement like [nodeJS](https://nodejs.org/en/download/), [ReactJS](https://reactjs.org/),  [gulp](https://gulpjs.com/) and [sass](http://sass-lang.com/install) for run this project.



##About Foreign Exchange Rates API
This project use Foreign Exchange Rates API from `https://api.exchangeratesapi.io/latest`, and I use Request specific exchange rates by setting the symbols parameter. for example `https://api.exchangeratesapi.io/latest?symbols=USD,GBP`. For ideal project, I usually crate specific file for saving all API request. But for this project, because only one API that I use, so I directly put the API on the specific component.

## How to check GIT Log

For checking log on this GIT project, please use: 

1. Open your terminal and go to this project directory.
2. After that run `git log --branches --not --remotes` on your terminal.
3. All my git log will show.