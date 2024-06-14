# Simple Backend With Node.js

We will be using `express` handling the backend, `mongodb` as a database and we  will go through things step by step.


1. First Step: Initialize the Node.js project.

    We will initialize the project using the `npm init` command. This will create a node_modules directory and package.json file.
2. Second Step: Install express.

    To install express just execute the command: `npm install express`. When everything is finished then you are good to go.
3. Third Step: Download and Install MongoDB.

    Find the installer for your Operating System and after making sure it has finished we will install our last package mongodb package to interact with the database: `mongodb`.

4. Forth Step: We will install bodyparser middleware.

    Body parser middlware is responsible for parsing incoming requests which handles the requests POSTed to the backend. This handles the form submissions. We can install by using `npm install body-parser`.

5. Fifth Step: Being secure with `cors`.

    In order to make a secure application we need to use the `cors` module to filter the incoming connections.

Last Step but totally optional (although recommended), we should add `"type": "module"` so we can use  syntax like `import y from xyz`.

After we made sure everything has finished we can go ahead with the code which will be explained here
and with comments on the code.

```js
import express from 'express';

const app = express();
const port = 3000;
```

This snippet will import express and make it ready to use. We initalize the app and the port the server is going to serve.

```js
app.get('/', (req, res) => {
    res.send('Hello World!');
});
```

These are called `routes`. In order to accept an incoming method we use the `get()` method from `express.js`.

```js
app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
```

Finally we use the `listen` method to run the server.


So with the modifications the lines becomes:

```js
// Enable CORS
app.use(cors());

// Parse application/json
app.use(bodyParser.json());

// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// Example POST route to demonstrate body-parser
app.post('/submit', (req, res) => {
    console.log(req.body);
    res.send('Data received');
});
```

Now we will use Express.js to handle requests and save to MongoDB but before we also need to install `bcrypt` which will hash the passwords in DB `npm install bcrypt`.







