const Router = require('express').Router();
const Employee = require('../DB/models/employee');

Router.get('/employees', (req, res, next) => {
  Employee.find()
    .then(employees => res.send(employees))
    .catch(next);

});

Router.post('/employees', (req, res, next) => {
  const employeeProps = req.body;
  Employee.create(employeeProps)
    .then(employee => res.send(employee))
    .catch(next);
});

module.exports = Router;
