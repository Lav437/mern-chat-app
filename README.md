
# Chat App

## Goal
Developing realtime Chat Website developed with MERN stack.

## Description
In this project, we set out to develop a robust chat application using the MERN stack (MongoDB, Express.js, React, and Node.js) combined with Socket.IO to enable seamless real-time communication. Our goal is to create a dynamic and responsive platform that supports instant messaging, ensuring both reliability and security in user interactions.

<!-- - **Real-Time Messaging:** Utilizes Socket.IO to deliver immediate, live communication between users.
- **Data Storage and Security:** Implements MongoDB for secure and efficient management of user details and message history.
- **User Authentication and Management:** Incorporates secure authentication mechanisms to safeguard user data and interactions. -->

- **User Authentication:** Enables secure user registration and login processes.
- **Real-Time Messaging:** Uses Socket.IO to facilitate seamless, real-time communication between users.
- **Notifications:** Delivers real-time updates for new messages, user activities, and other key events in the application.
- **Group Management:** Allows users to manage group memberships by adding or removing members from chat rooms.
- **Responsive Design:** Provides a consistent and adaptable user experience across different devices and screen sizes.
- **Admin Controls:** Allows admins to view detailed statistics on group and chat activity over specified time periods (e.g., weekly).

## Techstack
Certainly! Here’s a refined version with a more polished tone:

**Client:**

- **React.js:** A powerful frontend library for crafting dynamic, responsive user interfaces.

**Server:**

- **Node.js:** A robust JavaScript runtime for building scalable server-side applications.
- **Express.js:** A flexible backend framework for developing RESTful APIs and managing server-side logic.
- **MongoDB:** A NoSQL database designed for secure, scalable data storage.
- **Socket.IO:** A library enabling real-time, bidirectional event-based communication.

## Visuals
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
6.Chat Interface
![cahts](https://github.com/user-attachments/assets/5bf70741-dd7b-4f16-9855-94239f01bc19)

## Installation 

### Requirements
 1. Download link for [VScode(windows)](https://code.visualstudio.com/Download) 
 2. install VScode with the default settings
                                ![image-1](https://github.com/user-attachments/assets/e2c6c5c6-b1b2-4c6a-9dc2-b59d67414fb6)
4. Install [Node.js](https://nodejs.org/en/download/package-manager)  and [MongoDB](https://www.mongodb.com/docs/manual/administration/install-community/) with default settings.
5. To run this project, you will need to add these environment variables in your system. Initialize them with relevent credentials.

```
MONGO_URI = mongodb://localhost:27017
JWT_SECRET=djgjkdshbgjkhfnjksdfhbnsjkdfsdhjfk
ADMIN_SECRET_KEY= sample admin kjey
NODE_ENV = DEVELOPMENT
CLIENT_URL = frontend url


CLOUDINARY_CLOUD_NAME= YOUR CLOUD NAME
CLOUDINARY_API_KEY = YOUR CLOUD API KEY
CLOUDINARY_API_SECRET =  YOUR CLOUD SECRET
```

6. Clone the project
```bash
   git clone https://github.com/Lav437/mern-chat-app.git
```
7. Open the current working directory.
```bash
  cd chat-app
```
8. To install the dependencies run the following commands sequentially.
    - for client-side
    ```bash
      cd client/
      npm install
    ```
    - for server-side
    ```bash
      cd server/
      npm install
    ```
9. To start the server, run the following command.

```bash
  npm run dev
```
10. To start the client, run the following command.
```bash
  cd ../client
  npm start
```

## Authors and Acknowledgements

Lavkush Kumar  
CS22B034 <br>
B.Tech in Computer Science and Engineering  
[IIT Tirupati](https://www.iittp.ac.in/)

I extend my heartfelt gratitude to *I Am Beside You* for providing me with the invaluable opportunity to work on the chat application project. This experience has been pivotal in enhancing my technical skills and deepening my understanding of full-stack development. Working on such a dynamic and engaging project has marked a significant milestone in my professional journey.

I am truly appreciative of the trust and responsibility you placed in me, and I am honored to have contributed to a project that is both challenging and rewarding.


## Appendix

1. Dependency used for Backend.

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

2. Dependency used for Frontent.
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

