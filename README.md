# OnlineShop

Online store with the possibility of logging into a user account, adding products to the online basket and verifying paypal payments

# Instalation

To run this app you need create config file on server folder. Then create file with your jwtSecret and connection string to your MongoDB cluster.

Next enter the server folder then enter:

```node
npm install
npm run start
```

Then enter client folder and create your environment variable with sandbox id to your paypal. In next step enter:

```node
npm install
npm run start
```

# Screenshots


# Tech used

The backend was written in the node using express. MongoDB (cloud) was used as the database. JWT was used to verify users.

Frontend was written in React. The bootstrap and the styled-components package were used for styling. Axios was used to download data from the server.

