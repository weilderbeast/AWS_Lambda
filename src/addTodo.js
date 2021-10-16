"use strict";
const { v4 } = require('uuid')
const AWS = require('aws-sdk')
const addTodo = async (event) => {
    const { todo } = JSON.parse(event.body);
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const createdAt = date + ' ' + time;

    const id = v4();
    const newTodo = {
        id,
        todo,
        createdAt,
        completed: false
    }

    const dynamo = new AWS.DynamoDB.DocumentClient();
    await dynamo.put({
        TableName: 'TodoTable',
        Item: newTodo
    }).promise();


  return {
    statusCode: 200,
    body: JSON.stringify(
      newTodo
    ),
  };
};

module.exports = {
    handler: addTodo
}
