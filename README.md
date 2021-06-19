# AutoDesk Student home assignment
A link to live API on Heroku - https://autodeskhomeassignment.herokuapp.com/

In order to use this service get to the link above, then use any of this 2 endpoints:

1. GET /tweets?query=YOUR_STRING
This endpoint get a string and return the 10 latest tweets from Twitter API.

2. GET /health
This endpoint returns a health check of the service following data:
 - OS name - Darwin/Windows/etc.
 - Language/platform version - Version of the OS.
 - Memory usage of the machine (Percentage value).
 - CPU usage of the machine (Percentage value).


# Instructions how to run this service locally with Docker

1. Donwload Docker to your computer by this link https://www.docker.com/products/docker-desktop and follow the instructions to install it

2. clone this git repository to your computer to your local folder, by opening a command prompt or bash window, and run the command: git clone https://github.com/gal-oshri/student-home-assignment_autodesk).

3. run the command: cd student-home-assignment_autodesk to get to the directory of the git repository

4. run the command: docker build -t home-assignment . (the string "home-assginment" is the name of new container image we build, you can switch it).

5. run the command: docker run -dp 8000:8000 home-assignment

6. go to the url: http://localhost:8000/ and use any of the 2 endpoints above to GET the relevant information.
