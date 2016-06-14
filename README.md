# Angular & TypeScript
Angular course, basic concepts to start with TypeScript

### Prerequisites

You need git to clone the repository.
You can get git from
[http://git-scm.com/](http://git-scm.com/).

You must have node.js and its package manager (npm) installed.  
You can get them from [http://nodejs.org/](http://nodejs.org/).

### Setting work environment for this course
We will need to install:

* install node.js
* install git
* install [Source tree](https://www.sourcetreeapp.com/) or GITHUB desktop.
* Download the source code from [GITHUB](https://github.com/jcyovera/AngularTypeScript.git)
* Open command prompt, into to the folder path and execute this :
```
npm install typescript -g
npm install tsd -g

tsd install angular -r -o -s
tsd install angular-route -r -o -s
```
These commands should install typescript in your computer and TSD (TypeScript Definition manager for DefinitelyTyped)
TSD is deprecated, now for angular 2 we are using typings, but for a better comprehension of this course we are using tsd for some classes.
You should have installed the types for angular and angular-route.
```
npm install
```
You should find that you have a new
folder in your project.

* `node_modules` - contains the npm packages for the tools we need

### Run the Application

We have preconfigured the project with a simple development web server.  The simplest way to start
this server is:
* Open command prompt, into to the folder path and execute this :
```
npm start
```
Now browse to the app at `http://localhost:8001/#/inicio`.
