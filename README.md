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

> [!IMPORTANT]
> Configure a Redirect Setting for your project in Pangea Console.
> - Navigate to the `AuthN` service, `General > Redirect Settings`
> - Click `+ Redirect`
> - Type `http://localhost:3001` in the URL input and click `Save`

Navigate to `AuthN > OAuth Server`.
- Click the `+ OAuth Client` button on the right.
- Enter a name for the client.
- Select `Grant Types` of `Authorization Code`.
- Select `Response Types` of `Code` and `Token`.
- Enter an `Allowed Redirect URL` of `http://localhost:3001`, and press enter.
- Click Save.


> [!IMPORTANT]
> If the app is running on a different host or port number, the `Allowed Redirect URL` will need to be updated to match your setup.

Copy and note the `Client ID` for the OAuth Client created above. This is the CLIENT_ID used below. Copy the the `Metadata Endpoint` from the OAuth Server Configuration Details. This is the METADATA_URL used below.


### Configure environment variables
```
% cp .env.template .env.local
```

Set the following values in .env.local
REACT_APP_CLIENT_ID="{CLIENT_ID}"
REACT_APP_METADATA_URL="{METADATA_URL}"


### Start the server
```
% yarn start
```

### Vist the app

Open `http://localhost:3001` in a browser.
