'use strict';

const users = [
  {
    id: 1,
    name: 'User1'
  },
  {
    id: 2,
    name: 'User2'
  },
  {
    id: 3,
    name: 'User3'
  },
]

module.exports.userHandler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: { users, event },
  };
  callback(null, response);
};
