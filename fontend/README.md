



# News-front

<br/>

---
## Technical test for Allfunds.
---


News front is an APP with 2 views news view and archived news view, created with React, Axios and Bootstrap and websocket.io-client. 

<br/>



---
## **Technologies**
---

<div align="center">

<br/>
<br/>

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Bootstrap](https://img.shields.io/badge/bootstrap-%23563D7C.svg?style=for-the-badge&logo=bootstrap&logoColor=white)
![Socket.io](https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101)

<br/>

</div>

---
### **Websockets**
---

This frontend has implemented a connection through websocket.io-client to update the list of news in news view, when a new is added to the database. 

<br/>

---
## Views
---

<img src="./src/assets/images/Home.png" alt="Home"/>

### News view



- All unarchived news elements are displayed, each news item has a button to archive it and send it to the archived news view.
- Through websockets, the news list is immediately updated whenever a new item is added to the database.
- There is a button to change view.

<br/>
<img src="./src/assets/images/Archived.png" alt="Archived"/>

### Archived view


- All archived news elements are displayed, each news item has a button to delete it and dont show anymore.
- There is a button to change view.

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
    cd frontend

    # Installation command
    npm i

    # Running command
    npm start

```
---
<br/>


