"use strict";
const AWS = require('aws-sdk')

const fetchTodo = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient();
    const { id } = event.pathParameters;
    let todo;
    try{
        const res = await dynamo.get({
            TableName: 'TodoTable',
            Key: { id }
        }).promise();
        todo = res.Item
        console.log(res)
    } catch (err) {
        console.log(err);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            todo
        ),
    };
};

module.exports = {
    handler: fetchTodo
}
