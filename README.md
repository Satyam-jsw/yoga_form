# Project Image

![IMG1](https://github.com/Satyam-jsw/yoga_form/assets/96405804/8cf56900-1545-4a6d-8a05-ce6b14f16363)

![IMG2](https://github.com/Satyam-jsw/yoga_form/assets/96405804/a88d4ec8-45eb-450f-a440-2bd2749924e6)

# ER-Diagram of the Project
![Screenshot 2023-12-19 122911](https://github.com/Satyam-jsw/yoga_form/assets/96405804/a36ba63e-4418-453b-b28f-a6093be8be51)



## Hello, I have created project using the MERN STACK (YOGA FORM).

- This Project includes following Functionality:-
1. Create frontend of the admission form using HTML, CSS and REACTJS.
2. Create the backend of the form using nodejs, expressjs and mongoDB.

## Following Validations 
1. User can enroll age limit of 18-65 for the monthly classes only.
2. The monthly fee is only 500/- Rs INR.
3. Basic age, gender and phone number filled by user are valid in format.
4. There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The participants can choose any batch in a month and can move to any other batch next
month (all these things are stored in database only updated when user change it's batches).
5. Here, show a "ThankYou Page"  message when the user registered (I can also integrate a Payment Gateway Page when user enrolled).

## Approach
1. When user enrolled, to fill all the fields (like name, age, gender, phone, fee, Batchs), if not any field by user ,when user hit the button it's show a pop to fill all the boxes. and also check all validation of fee (Only 500rs), age (age limit of 18-65), phone Number(consist 10-digit).
2. if user enrolled then all records of user are stored in database(Mongodb).
3. Here, i have maked a phone number as unique key.
4. At time of storing data we stored the subscriptionStart and subscriptionEnd date also and it's selected Batch
5. If user want to change its batch first we check that user are present in database (to find the phone number of user as unique key).
6. If that user phone number exits in database, then
     * check its current date is less than subscriptionEnd then return [Already enrolled for the current month]
     * else, find the user id of that number and update only subscriptionStart, subscriptionEnd, age, selectedBatch.
<hr>

#### FOR MORE DETAILS AND ITS IMPLEMENTATION SEE THE FILE (Auth.js) IN SERVER FOLDER.

## To Do!
1. Make More attractive UI.
2. Add More functionality/Features like integrate with payment methods(to be working transaction).

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

<h3 align="center">&copy; 2023 Satyam Jaiswal</h3>
