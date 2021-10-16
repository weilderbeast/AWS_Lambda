# Serverless framework app with AWS Lambda and DynamoDB

Deploy steps:
 - install AWS CLI here: https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html
 - create an IAM Role user in your AWS Console and make sure to have *Programmatic access* as the access key
 - configure your CLI using aws configure and insert the access KeyID and secret KeyID from the console
 - install serverless here: https://www.serverless.com/framework/docs/getting-started
 - clone the repository
 - replace the ... in the serverless.provider.iamRoleStatements.resource with your own DynamoDB instance
 - open CMD and write `serverless deploy --verbose` and wait (it does take a while depending on your region)
 - use Postman or any other http client to do requests (after you deploy, in the CMD you will have a list of URLs that you can copy/paste, along with the method)
 - voila, it works

Notes:
 - if you use windows, scripting might be disabled so you cannot run the "serverless" command, thus you need to write `Set-ExecutionPolicy -ExecutionPolicy Unrestricted` and press enter
