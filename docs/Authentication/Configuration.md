### Environment Variables

Ensure the following environment variables are set in a .env file:

#### User Microservice

```plaintext
MYSQL_ROOT_PASSWORD=your_mysql_root_password
MYSQL_DATABASE=your_mysql_database
MYSQL_USER=your_mysql_user
MYSQL_PASSWORD=your_mysql_password

AWS_REGION=your_aws_region
USER_POOL_ID=your_user_pool_id
COGNITO_USER_CLIENT_ID=your_cognito_user_client_id
COGNITO_USER_CLIENT_SECRET=your_cognito_user_client_secret
COGNITO_TOKEN_ENDPOINT=your_cognito_token_endpoint
REDIRECT_URI=your_redirect_uri
```

#### Frontend

```plaintext
VITE_LOGIN_SIGN_UP=https://your_cognito_hostedui_domain.auth.your_aws_region.amazoncognito.com/login?client_id=your_cognito_user_client_id&response_type=code&scope=aws.cognito.signin.user.admin+email+openid+phone&redirect_uri=your_redirect_uri
```
