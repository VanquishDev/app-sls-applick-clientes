/* Amplify Params - DO NOT EDIT
	AUTH_AUTHCOGNITO_USERPOOLID
	ENV
	REGION
Amplify Params - DO NOT EDIT */



const UserPoolId = process.env.AUTH_AUTHCOGNITO_USERPOOLID;

const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.REGION,
});

exports.handler = async (event, context, callback) => {

    // console.log("event: " + JSON.stringify(event, null, 2))
    // console.log("context: " + JSON.stringify(context, null, 2));

    if (!event) {
        callback(null, 'Necessário informar os parametros.');
    }

    const password = event.arguments.password
    const username = event.arguments.username

    if (!username) {
        callback(null, 'Necessário informar o username.')
    }

    if (!password) {
        callback(null, 'Necessário informar a password.')
    }

    const cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' })

    await cognito
    .adminSetUserPassword({
        UserPoolId,
        Username: username,
        Password: password,
       //  Permanent: true,
    })
    .promise()
    .catch((err) => {})

    callback(null, { })
    return {  }
};
