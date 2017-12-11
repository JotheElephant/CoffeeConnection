const mongoose = require('mongoose');
const graphql = require('graphql');
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;
const EmployeeType = require('./employee_type');
const Employee = mongoose.model('employee');

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    allEmployees: {
      type: new GraphQLList(EmployeeType),
      resolve() {
        return Employee.find({});
      }
    }
  })
});

module.exports = RootQuery;