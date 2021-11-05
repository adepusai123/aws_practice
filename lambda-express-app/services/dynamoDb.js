const AWS = require("aws-sdk");

const USERS_TABLE = process.env.USERS_TABLE;

class DynamoDB {
    constructor() {
        this.tableName = USERS_TABLE;
        this.dynamoDbClient = new AWS.DynamoDB.DocumentClient();
    }
    getUserById(userId) {
        const params = {
            TableName: this.tableName,
            Key: {
                userId
            },
        };
        return this.dynamoDbClient.get(params).promise();
    }

    createUser(Item = {}) {
        const params = {
            TableName: this.tableName,
            Item
        };
        return this.dynamoDbClient.put(params).promise();
    }

    getAllUsers(){
        const params = {
            TableName:this.tableName,
            Select:'ALL_ATTRIBUTES'
        };
        return this.dynamoDbClient.scan(params).promise();
    }
}

module.exports = new DynamoDB();