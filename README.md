
# Name

Realtime Chat App with MERN stack


## Description
Chat refers to the process of communicating, interacting, and exchanging messages over the Internet. It involves two or more individuals engaging through a chat-enabled service or software.

The Chat Application is a comprehensive Full Stack solution designed to facilitate real-time communication. This application leverages Socket.IO to provide instantaneous messaging capabilities and ensures secure storage of user details using MongoDB.
## Features

- **User Authentication:** Supports secure user registration and login processes.
- **Real-Time Messaging:** Utilizes Socket.IO to enable seamless, real-time communication between users.
- **Notifications:** Provides real-time notifications for new messages, user activities, and other important events within the application.
- **Add or Remove Users from Group:** Facilitates management of group memberships by allowing users to add or remove members from chat rooms.
- **Responsive Design:** Ensures a smooth and adaptable user experience across various devices and screen sizes.
- **Admin Controls:** Admins can view detailed statistics on the number of groups and chats within the application over specified time periods (e.g., weekly).


## Tech Stack

**Client:** 
- **React.js:**  Frontend library for creating a dynamic and responsive user interface.

**Server:**  
- **Node.js:** JavaScript runtime for server-side application development.
- **Express.js:** Backend framework for building RESTful APIs and managing server-side logic.
- **MongoDB:** NoSQL database for secure and scalable data storage.

- **Socket.IO:** Library for real-time, bidirectional event-based communication


## Screenshots
1.Login Page
![loginPage](https://github.com/user-attachments/assets/b33b0231-448b-4947-a4d7-91e52b4f3739)
2.SignUp page
![signUpPage](https://github.com/user-attachments/assets/cf341b28-5bce-4776-9dcb-5fb7b659f330)
3.Notification
![Notification page](https://github.com/user-attachments/assets/381a566b-f176-4d61-9b51-ed8b710cb804)
4.GroupManagement
![groupManagement](https://github.com/user-attachments/assets/0facc048-02bd-4e79-a3ba-f50128bef9d4)
5.Send File
![filehandling](https://github.com/user-attachments/assets/aee5baee-2e37-4b12-9717-0fa23dafa1b4)

## Installation 

### Requirements
 1. Download link for [VScode(windows)](https://code.visualstudio.com/Download) 
 2. install VScode with the default settings
                                ![image-1](https://github.com/user-attachments/assets/e2c6c5c6-b1b2-4c6a-9dc2-b59d67414fb6)

4. [Nodejs](https://nodejs.org/en/download/package-manager)  and [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/)  both should be install and Make sure MongoDB is runing.
 #### Environment Variables
To run this project, you will need to add the following environment variables to your .env file


 #### Run Locally
Clone the project
```
   git clone https://github.com/Lav437/chat-app.git
```
Go to the project directory
```
  cd chat-app
```
Install the dependency
```
  cd client/
  npm install
```
```
  cd server/
  npm install
```
Start the server

```
  cd server/
  npm run dev
```
Start the client
```
  cd server/
  npm Start
```



## Authors and acknowledgement

- [Lavkush](cs22b034@iittp.ac.in)
We extend our heartfelt gratitude to Zelta Labs Untrade for the incredible opportunity to develop a MERN stack chat application as part of their project. Working on this initiative has significantly enhanced our skills and provided deep insights into building real-time communication systems.

A special thanks to the vibrant and supportive community on the Zelta Labs Discord channel. Your expertise, invaluable feedback, and continuous encouragement have been essential in overcoming challenges and successfully completing the project. The collaborative spirit within the community has made this experience both enriching and rewarding.

Thank you, Zelta Labs Untrade, and the entire Discord community, for your generosity, support, and the opportunity to learn and grow through this exciting project.


## Appendix

1. Dependency used for Backend

- [nodemon](https://www.npmjs.com/package/nodemon)
- [express](https://expressjs.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [express-validator](https://www.npmjs.com/package/express-validator)
- [multer](https://www.npmjs.com/package/multer)
- [soket.io](https://soket.io/lander)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [cloudinary](https://cloudinary.com/)
- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
- [cors](https://www.npmjs.com/package/cors?activeTab=readme)

2. Dependency used for Frontent
- [framer-motion](https://www.framer.com/motion/)
- [@reduxjs/toolkit](https://redux-toolkit.js.org/)
- [@mui/x-data-grid](https://mui.com/x/react-data-grid/getting-started/)
- [@mui/material](https://mui.com/)
- [@mui/icons-material](https://mui.com/material-ui/material-icons/)
- [@emotion/react](https://www.npmjs.com/package/@emotion/react)
- [react-chartjs-2 ](https://www.npmjs.com/package/react-chartjs-2)
- [react-helmet-async](https://www.npmjs.com/package/react-helmet-async)
- [react-hot-toast](https://www.npmjs.com/package/react-hot-toast)
- [react-router-dom](https://www.framer.com/motion/)

