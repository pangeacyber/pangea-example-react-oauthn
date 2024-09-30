# Pangea React Authn Demo

## Setup

### Clone the repo and install dependencies

```
% git clone git@github.com:pangeacyber/pangea-example-react-oauthn.git
% cd pangea-example-react-oauthn
% yarn install
```

### Configure Pangea AuthN Service

If you don't already have an account, signup at https://console.pangea.cloud/

Create a project and enable the AuthN Service in the Pangea Console.

Navigate to `AuthN > OAuth Server`.
- Click the `+ OAuth Client` button on the right.
- Enter a name for the client.
- Select `Grant Types` of `Authorization Code`.
- Select `Response Types` of `Code` and `Token`.
- Enter an `Allowed Redirect URL` of `http://localhost:3001`, and press enter.
- Click Save.

> [!IMPORTANT]
> If the app is running on a different host or port number, the `Allowed Redirect URL` will need to be updated to match your setup.

Copy and note the `Client ID` for the OAuth Client, this is the CLIENT_ID used below.

Note the domain from the Metadata endpoint under Configuration Details. This will be used as the PROJECT_DOMAIN below.


### Configure environment variables
```
% cp .env.template .env.local
```

Set the following values in .env.local
REACT_APP_CLIENT_ID="{CLIENT_ID}"
REACT_APP_PROJECT_DOMAIN="{PROJECT_DOMAIN}"

> [!IMPORTANT]
> The PROJECT_DOMAIN just be only the domain part of the Metadata Endpoint, no protocol or path
> 
> i.e. `pdn-xxxxxxxxxxxxxx.login.dev.aws.pangea.cloud`


### Start the server
```
% yarn start
```

### Vist the app

Open `http://localhost:3001` in a browser.
