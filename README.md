## Any Vison Home Work

requirements:
 - Docker

**to start:**
	

    git clone
    sudo docker-compose up --build

the app will be served in http://localhost:80

did my best to answer the goal - but I had only 2 days before i go back to the aramy.

all the key functions are working but the design coud be better and same for the authentication.

## **the assiment:**

**Stack:**
- Nodejs
- MongoDB
- ReactJS (redux if needed)

**Screens**
- Login page.
- Registration page.
- Home page.
- RSTP grid and display

**Flow**

- **Registration** - ( Free hand to choose the user schema)
- **Login**
- **Home page** - basic page with an input to put a URL for RTSP Stream ( save the url in a
mongodb collection ), after the input validation and submit, the user should redirect
to RTSP grid and display page.
- **RTSP grid and display** - A page with all the saved urls that associated to this user,
click on each Url item will let you watch the streaming from the url.

**Main guidelines**
- Design
- Good practices with mongo
- clean and ordered code
