# Auth with React Router V4 and Firebase V3

*Using React 15.4.0, React Router 4, and Firebase 3.6.1*

#### Features:
* Protected Routes with React Router
* Register new users with Firebase
* Add new users to ```/users``` in your Firebase database
* Login/Logout Functionality
* Simple Boostrap UI

#### Instructions:

* ```npm install```
* ```npm start```
* Visit ```localhost:3000```

#### Try it out in a [Docker](https://www.docker.com/) container:
* Run a container running the prod version: `docker run -p 8080:80 -d allthethings/react-router-firebase-auth`
* **Or** build a dev version, locally: `docker build -t react-router-firebase-auth .`
* Then run the image (listens for changes to src): `docker run -v "$(pwd)/src:/code/src" -p 3000:3000 -d --name react-router-firebase-auth react-router-firebase-auth`
