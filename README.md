


# Allfunds news

<br/>

---
## Technical test for Allfunds.
---
In each of the frontend and backend folders there are the respective readme with information.

Full stack app:
- Frontend News front is an APP with 2 views news view and archived news view, created with React, Axios and Bootstrap and websocket.io-client.
- Backend News back is a RESTful API created with Express and connected to Atlas MongoDB database.


<br/>



https://user-images.githubusercontent.com/45425367/216061707-544db2f2-3338-47d2-9d4f-51d7894c5596.mp4




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
![Imagen1](https://user-images.githubusercontent.com/45425367/216061903-a00c0c9d-6053-46d4-8075-ec54e82a9bc1.png)

![Imagen2](https://user-images.githubusercontent.com/45425367/216061912-724712f9-75ee-4be0-b52f-514a89919d64.png)

![Imagen3](https://user-images.githubusercontent.com/45425367/216061933-3c0d9386-07b9-45bb-ab1e-cfa9bfde14ce.png)

---
## Future developments/TO DO
---

Some TO DO are defined as comments in the code

backend

- dto, controller, services, validators and error handling
- use ecm import
- use pagination instead of fetching everything, resources management
- testing (jest, travis, jetkins), swagger and ts
- separate server into server, websocket and db
- Use babel to be able to use ecmaescript in browsers

Frontend

- Decouple the components, and pass context trough the components at the end there is only the view
news and archived news, the reusable components
- websockets, I'm just passing a ping, normally I would have passed the data through
websocket and would have added it to the array so as not to have to call the endpoint again for efficiency reasons
- When archiving or deleting, I call get again to refresh this is not efficient, it would be best to have worked with the arrangement and remove it in this case
to reduce the number of calls
- testing (jest, travis, jetkins, cypress) and ts
- create template, global css, etc...
- Use babel to be able to use ecmaescript in browsers


