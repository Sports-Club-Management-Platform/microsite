### User Authentication

This module handles user authentication using Amazon Cognito User Pool. It provides functions to authenticate users with an authorization code, retrieve user information using the access token, and log users out by revoking their access tokens.

#### Functions

- **`auth_with_code(code: str, redirect_uri: str)`**

  - **Parameters:**
    - `code`: Authorization code obtained after user login.
    - `redirect_uri`: Redirect URI used during the login process.
  - **Returns:** Access token and expiration time if authentication is successful, otherwise `None`.

- **`user_info_with_token(access_token: str)`**

  - **Parameters:**
    - `access_token`: Access token obtained after successful authentication.
  - **Returns:** User information if successful, otherwise `None`.

- **`logout_with_token(access_token: str)`**
  - **Parameters:**
    - `access_token`: Access token to revoke.
  - **Returns:** `True` if successful, otherwise `False`.

### JWT Authentication

This module handles JWT authentication using JSON Web Keys (JWK) obtained from the Cognito User Pool. It provides mechanisms to decode JWTs, verify their signatures, and check if they have been revoked.

#### Classes

- **`JWTBearer`**
  - Inherits from `HTTPBearer` and implements methods for JWT verification and decoding.

#### Methods

- **`decode_jwt(token: str)`**
- **`verify_jwk_token(jwt_credentials: JWTAuthorizationCredentials) -> bool`**
- **`verify_token_revoed(jwt_token: str)`**
- **`__call__(self, request: Request) -> Optional[JWTAuthorizationCredentials]`**
- **`validate_jwt_structure(jwt_token: str)`**
- **`create_jwt_credentials(...)`**

### Authentication Endpoint

This module defines the authentication endpoints for user login, fetching user information, and logout.

#### Endpoints

- **`POST /auth/sign-in`**

  - Logs in a user using the authorization code and returns an access token.
  - **Parameters:**
    - `code`: Authorization code obtained after user login.
  - **Responses:**
    - `200 OK`: Access token and expiration time if authentication is successful.
    - `401 Unauthorized`: If authentication fails.

- **`GET /auth/me`**

  - Returns the current authenticated user's information.
  - **Responses:**
    - `200 OK`: User object if found.
    - `403 Forbidden`: If the user is not authenticated.

- **`GET /auth/logout`**
  - Logs out a user by revoking the access token.
  - **Responses:**
    - `200 OK`: Logout successful message.
    - `401 Unauthorized`: If logout fails.
