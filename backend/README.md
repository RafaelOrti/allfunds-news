


# News-back

<br/>

---
## Technical test for Allfunds.
---

News back is a RESTful API created with Express and connected to Atlas MongoDB database. Four basic operations (CRUD) can be performed on database: Create, Read, Update, and Delete. 

This backend has implemented a connection through websockets that observes any change in the database and in case of 'insert' sends a ping to the frontend to update the data.
<br/>

![Imagen6](https://user-images.githubusercontent.com/45425367/216063687-26baa507-89e9-4701-9282-3937843d9ef9.png)


<br/>

---
## **Technologies**
---

<div align="center">

<br/>

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)
![MongoDB](https://img.shields.io/badge/mongodb-%2320232a.svg?style=for-the-badge&logo=mongodb&logoColor=%2361DAFB)
<br/>
<br/>
</div>



---
## **Endpoints**
---


- GET:

  - /news/ -> It returns all the news in the database that are arcived or not archived deppending of the query filter. Response is a JSON object 'news' with an array of 'new' objects:
  <br>  filter ==='false': property 'archived':false sorted by 'storageDate' '.
  <br>  filter ==='true': property 'archived':true sorted by 'archiveDate'

- POST:

  - /news/ -> It allows to create news in the database. It returns a JSON object 'createdNew' with the created new. THis endpoint is only used for an external tool to add news, not by the app.

- FETCH:

  - /news/:id -> It allows to archive a new. This endpoint add 'archiveDate' with the date of archivement to the new with the id provided. It returns a JSON object 'updatedNew' with the new modified as defined above.

- DELETE:
  - /news/:id -> It allows to delete a new. The new with the id provided will be deleted from the database. When a new is deleted it returns a JSON object with 'msg': "Deleted".

<br/>

---
### **Websockets**
---
Backend has websocket connection and disconnection when a client points to the server or not.

The backend is reading continuosly the Atlas mongo database to send a websocket to the frontend when an 'insert' happens.

To simulate an external api creating a new ('insert'), we can use our endpoint POST designed for checking purposes.
<br/>
https://user-images.githubusercontent.com/45425367/216060254-e38ca5b5-f9a9-4f8e-ba87-788207f0df28.mp4


<br/>

---
### **Simulating external create New**
---

You can use ALLFUNDS.postman_collection.json to import to postman and check the endpoints and create news.

Or use this json in the body on a Post Request to the endpoint http://localhost:4000/news/ for local
<br/>

```
{
  "title": "",
  "description": "",
  "content": "",
  "author": ""
}
```
<br/>

https://user-images.githubusercontent.com/45425367/216059791-f886c716-534b-496e-855d-a16b23da7b8b.mp4

<br/>



---
## **Model Schemas**
---

All the data is stored in Atlas MongoDB. The Cluster0 has  a database called allfunds that has 1 collection news. This collection contains documents based on New schema detailed below.
<br/>
```
.
└── New
    └── title: String
    └── description: String
    └── storageDate: Date
    └── content: String
    └── author: Schema.Types.ObjectId
    └── archived: Boolean
    └── archiveDate: Date
  
```



---
## Commands
---
```shell
   
    # Repository clonation
    https://github.com/RafaelOrti/allfunds-news.git

    #Access the folder
    cd allfunds-news
    cd backend

    # Installation command
    npm i

    # Running command
    npm start

```
---
<br/>

