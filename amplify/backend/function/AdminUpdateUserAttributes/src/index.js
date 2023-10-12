/* Amplify Params - DO NOT EDIT
    AUTH_AUTHCOGNITO_USERPOOLID
    ENV
    REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const UserPoolId = process.env.AUTH_AUTHCOGNITO_USERPOOLID;
const AWS = require('aws-sdk');

AWS.config.update({
    region: process.env.REGION,
});

exports.handler = async (event, context, callback) => {

    const cognito = new AWS.CognitoIdentityServiceProvider({ apiVersion: '2016-04-18' })

    const Username = event.arguments.username
    const UserAttributes = JSON.parse(event.arguments.attributes)

    const params = {
        UserPoolId,
        Username,
        UserAttributes,
    };

    await cognito.adminUpdateUserAttributes(params, function (err, data) {
        if (err) {
            console.log('err', err, err.stack);
        } else {
            console.log('data', data);
        }
    });

    callback(null, {})
    return {}
};
