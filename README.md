


# Allfunds news

<br/>

---
## Technical test for Allfunds.
---

Full stack app:
- Frontend News front is an APP with 2 views news view and archived news view, created with React, Axios and Bootstrap and websocket.io-client.
- Backend News back is a RESTful API created with Express and connected to Atlas MongoDB database.


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

<br/>


---
## [API Url](https://news-api-allfunds.onrender.com/) 🔗
---



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



---
## Future developments/TO DO
---

Some TO DO are defined as comments in the code

- Use babel to be able to use ecmaescript in browsers
- Change EC6 import and export in backend
- Uncouple the components and use context to provide the data of each view
- Use DAO, DTO
- Use pagination instead of scrollable, I know that it is not efficient because all the news is brought every time, but due to lack of time I left this structure, in the code it is specified in comments how to implement it in fact I had made the GET endpoint with this structure, as for the frontend a bootstrap pagination and a useState would have been used for the page number

