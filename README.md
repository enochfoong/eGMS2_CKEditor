### 1. Install dependencies

To get started, install the necessary npm packages:

```sh
npm install
```

### 2. Fill the required information

Update the license keys for CKEditor 5 and WebSpellChecker in the App.jsx file:

CKEditor 5: Replace the value of the LICENSE_KEY variable with your license key.
WebSpellChecker: Replace the value of the WPROOFREADER_SERVICE_ID variable with your service ID.

### 3. Start the project

Run the following command to start the project:

```sh
npm run start
```

And open the project in the browser.

### 4. Start file upload server

Navigate to the upload server directory:

```sh
cd /ckeditor-upload-server
```

Start the server:

```sh
node server.js
```
