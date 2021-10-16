"use strict";
const AWS = require('aws-sdk')

const fetchTodos = async (event) => {
    const dynamo = new AWS.DynamoDB.DocumentClient();

    let todos;
    try{
        const res = await dynamo.scan({
            TableName: 'TodoTable'
        }).promise();
        todos = res.Items
    } catch (err) {
        console.log(err);
    }

    return {
        statusCode: 200,
        body: JSON.stringify(
            todos
        ),
    };
};

module.exports = {
    handler: fetchTodos
}
