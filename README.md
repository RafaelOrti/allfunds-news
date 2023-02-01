


# Allfunds news

<br/>

---
## Technical test for Allfunds.
---

Full stack app:
- Frontend News front is an APP with 2 views news view and archived news view, created with React, Axios and Bootstrap and websocket.io-client.
- Backend News back is a RESTful API created with Express and connected to Atlas MongoDB database.



https://user-images.githubusercontent.com/45425367/216058433-22e70ea8-0a1a-495b-a5f2-99abf0fcd79f.mp4


<br/>

---
## **Technologies**
---

<div align="center">

<br/>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
<br/>
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![MongoDB](https://img.shields.io/badge/mongodb-%2320232a.svg?style=for-the-badge&logo=mongodb&logoColor=%2361DAFB)
<br/>
<br/>
</div>


---
### **Websockets**
---

Frontend has implemented a connection through websocket.io-client to update the list of news in news view, when a new is added to the database. 

Backend has implemented a connection through websockets that observes any change in the database and in case of 'insert' sends a ping to the frontend to update the data.

In this videos we can see how when we create a new, its refreshed the list of news.
<br/>

https://user-images.githubusercontent.com/45425367/216059791-f886c716-534b-496e-855d-a16b23da7b8b.mp4


https://user-images.githubusercontent.com/45425367/216060254-e38ca5b5-f9a9-4f8e-ba87-788207f0df28.mp4




<br/>





---
## Commands
---
```shell
   
    # Repository clonation
    https://github.com/RafaelOrti/allfunds-news.git

    #Access the folder
    cd allfunds-news

    #Access the folder you want
    cd backend or cd frontend

    # Installation command
    npm i

    # Running command
    npm start

```
---
<br/>

---
## Design
---


This application has been developed following the indications of the document complying with all the points.

Initial time was spent specifying and listing the requirements and translating them into tasks:

- Design the endpoints with the necessary logic
- Make a front design schema by modules
- Study the reusability of components

Here some captures of this designing tasks:
![Im![Imagen2](https://user-images.githubusercontent.com/45425367/216058641-1e6b453f-f764-4e9b-b7e4-24749c6807a7.png)
ag![Imagen3](https://user-images.githubusercontent.com/45425367/216058648-29808b5d-b065-4eec-ae1b-5dc80dd586cf.png)
en1](https://user-images.githubusercontent.com/45425367/216058611-ef656819-0427-4ed0-b8b8-47bd71bab961.png)



---
## Future developments/TO DO
---

Some TO DO are defined as comments in the code

- Use babel to be able to use ecmaescript in browsers
- Change EC6 import and export in backend
- Uncouple the components and use context to provide the data of each view
- Use DAO, DTO
- Use pagination instead of scrollable, I know that it is not efficient because all the news is brought every time, but due to lack of time I left this structure, in the code it is specified in comments how to implement it in fact I had made the GET endpoint with this structure, as for the frontend a bootstrap pagination and a useState would have been used for the page number

