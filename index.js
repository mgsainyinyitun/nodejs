const express = require('express');
const sequelize = require('./database/connection');
const { add, all, remove, edit } = require('./controller/user.controller');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log('server listen on port : ', PORT);
  sequelize.authenticate()
    .then(() => {
      console.log('Database connection has been established successfully.');
    })
    .catch(error => {
      console.log('Connection has been established in error.', error);
    })
});

app.get("/", (resquest, response) => {
  response.statusCode = 200;
  response.json({
    message: "Server is listening on port : " + PORT + "++++",
  })
});

app.post("/add", (req, response) => {
  let postData = req.body;
  add(postData).then(res => {
    console.log(res);
    response.json(res);
  }).catch(err => {
    console.log(err);
    response.json(err);
  });
})

app.get("/all", (request, response) => {
  all()
    .then(res => {
      response.json(res);
    })
    .catch(err => {
      response.json(err);
    })
})

app.delete("/user/:username", (request, response) => {
  const username = request.params.username;
  remove(username)
    .then(res => {
      if (res) {
        response.json({
          message: "Successfully deleted user.", username
        });
      } else {
        response.json({
          message: "User delete unsuccess!", username
        });
      }
    })
    .catch(err => {
      response.json(err);
    })
})

app.put("/user/:username", (request, response) => {
  const username = request.params.username;
  const data = request.body;

  console.log(username);
  console.log(data);

  edit(username, data)
    .then(res => {
      if (res) {
        response.json({
          message: "Successfully updated user.", username
        });
      } else {
        response.json({
          message: "User update unsuccess!", username
        });
      }
    })
    .catch(err => {
      response.json(err);
    })
})