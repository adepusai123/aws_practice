const express = require('express');
const router = express.Router();
const {dynamoDb} = require('../services');

const uri = 'user';

async function users(req,res){
    try {
        const { userId }= req.query;
        if(userId){
            const result = await dynamoDb.getUserById(userId);
            res.json({
                message:'From users route',
                result
            });
        } else {
            const result = await dynamoDb.getAllUsers();
            res.json({
                message:'From users route',
                result
            }); 
        }
    } catch (error) {
       console.error('Routes:: user ::get users got error:', JSON.stringify(error));
       res.status(500).json(error); 
    }
}

async function createUsers(req,res){
    try {
        const {userId, name }= req.body;
        const Item = {
            userId, name
        };

        const result = await dynamoDb.createUser(Item);
        res.json(result);
    } catch (error) {
        console.error('Routes:: user :: create user got error:', JSON.stringify(error));  
        res.status(500).json(error);
    }
}

router.get('/', users);
router.post('/',createUsers);

module.exports = {router, uri};