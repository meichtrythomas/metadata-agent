[![Home](https://media.ffycdn.net/eu/weare/AAc62UuS1kyXCK8EQ1Fo.svg?width={width})](https://developer.frontify.com)

Search

off-canvas-large

- [Home](/hub/484 "Home")

Introduction

- Getting started

Brand SDK

- Brand SDK
- Content blocks
- Apps

  - Getting Started

    - Quick start
    - App development

      - Concepts
      - Context
      - App settings
      - Secure Request
      - App user state
      - Scopes

    - Marketplace

  - Reference

APIs

- GraphQL API
- Webhooks
- Asset Processing API
- Media Processing API (beta)
- [

  GraphQL Explorerexternal linkopens in a new tab

  ](https://frontify.github.io/public-api-explorer)

- [

  GraphQL Referenceexternal linkopens in a new tab

  ](https://frontify.github.io/graphql-reference/)

Widgets

- Finder
- Authenticator

- Developer Sandbox

Contact us

- [

  Bug reportexternal linkopens in a new tab

  ](https://forms.clickup.com/2523021/f/2czwd-124932/2OEP5X5S3O8SDM2MOO)

- [

  System statusexternal linkopens in a new tab

  ](https://status.frontify.com/)

- [

  Becoming a partnerexternal linkopens in a new tab

  ](https://www.frontify.com/en/partnership/)

# App development

## Concepts

After the initial connection, the local development app will appear under the "More (…)" section. You can launch it by clicking on it. The development app supports hot module reloading, so any changes made to the code will appear immediately.

![Screenshot 2024-05-22 at 14.27.33](https://media.ffycdn.net/eu/weare/Rv6icbo9FjiRVdmUjGNY.png?width=630&format=webp&quality=100)

Local Development App

Brand SDK methods

To interact with the platform, use the following methods from @frontify/app-bridge:

- getAssetResourceInformation
- getCurrentUser
- getAccountId
- createAsset
- getSecureRequest
- executeGraphql

Learn more about AppBridge utilities for apps:

[API Methods](/r/ZzWHJ-Tm6hKY6pdI9yqDlKd5LV30HGfJvRE2OusHhm0) →

Making your App visible

Apps can appear in various places within Frontify. By extending the manifest, an app developer can control this in great detail.

[Manifest](/r/umZAXrjo3u2E2l_zK4UDgeJMRlI6DbtCYMZkkrfCay0) →

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## Context

The AppBridge allows apps to interact with various surfaces by accessing their respective contexts. Each surface provides a context object with specific properties. This section outlines the context properties for the assetAction and assetCreation surfaces. Configuration details can be found in the [Manifest](/r/umZAXrjo3u2E2l_zK4UDgeJMRlI6DbtCYMZkkrfCay0).

## Surface contexts

### Common properties

All surfaces share a set of common properties that enable interaction with the platform. These common properties are:

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

type AppBaseProps = {

brandId: number; // Identifier for the associated brand

domain: string; // Domain name associated with the account

parentId: string; // ID of the parent entity

rootId: string;

};

### AssetAction surface

The assetAction surface provides a context object with properties specific to actions performed on assets. This context extends the base properties by adding the assetId property, which uniquely identifies the asset involved in the action.

TypeScript Copy

9

1

2

3

4

›

⌄

type AssetActionContext = {

surface: 'assetAction'; // Surface identifier for asset actions

assetId: string; // Unique identifier for the asset

} & AppBaseProps;

### AssetViewer surface (Alpha)

The assetViewer surface provides a context object with properties specific to viewing an assets on a Guideline or connected Guideline Library. This context extends the base properties by adding the assetId property, which uniquely identifies the asset involved in the surface.

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

type AssetViewerContext = {

surface: 'assetViewer'; // Surface identifier for asset Viewer

assetId: string; // Unique identifier for the asset

brandId: number;

domain: string;

};

### AssetBulkActions surface

The assetBullkActions surface provides a context object with properties specific to BulkActions performed on assets. This context extends the base properties by adding the selected property, which uniquely identifies the assets involved in the action.

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

⌄

⌄

⌄

⌄

type AssetBulkActionsContext = {

surface: 'assetBulkActions'; // Surface identifier

selection: {

assets: {

ids: string\[\]; // Unique identifier for assets

},

folders: {

ids: string\[\]; // Unique identifier for folder

}

};

} & AppBaseProps;

### AssetCreation surface

The assetCreation surface provides a context object tailored for the asset creation process. Similar to assetAction, this context extends the base properties but does not include any additional properties.

TypeScript Copy

9

1

2

3

›

⌄

type AssetCreationContext = {

surface: 'assetCreation'; // Surface identifier for asset creation

} & AppBaseProps;

TypeScript Copy

9

1

2

3

4

›

⌄

const context = appContext();

if (context.surface === 'assetAction') { // check if we are on the correct surface

console.log(context.assetId); // Typescript will correctly hint the assetId

}

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

›

// If it is clear where the App runs one can just use the surface specific generic

// This will return a typed response

// Asset Action surface

const context = appContext<AssetActionContext\>();

context.assetId;

// Asset Creation surface

const context = appContext<AssetCreationContext\>();

context.surface

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

// Or using the appBridge

const appBridge = new AppBridgePlatformApp();

const context = appBridge.context().get(); // variable helps typescript with the typing

if (context.surface === 'assetAction') { // check if we are on the correct surface

console.log(context.assetId); // Typescript will correctly hint the assetId

}

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## App settings

Use App Settings to allow users to customize your app.

After running the CLI command to [create the app](/r/WNyHOLmNFgGmvcYxbfSEU4kAb2Ctj8MH64GYZ-KAUxs), locate the ./src/settings.ts file. This is where you can define your App Settings.

If you are already familiar with the [Content Block Settings](/r/5Nmx1GBvuVJNWG-jEZduAX3bKdYc5ifEIEI5NIpVKpg), the syntax and [available setting types](/r/RYRvm8ddAl4HuuUXSRMZVKyEd0mNMrZd8NApFn7KGwo) for App Settings will be the same.

The initial ./src/settings.ts file looks like this:

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

›

⌄

⌄

⌄

import { defineSettings } from '@frontify/platform-app';

export const settings = defineSettings({

credentials: \[

{

type: 'input',

id: 'single-line',

label: 'Input field',

},

\],

});

The settings.ts is imported in index.ts

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

›

⌄

import { defineApp } from '@frontify/platform-app';

import { App } from './App';

import { settings } from './settings';

export default defineApp({

app: App,

settings,

});

### Accessing and modifying settings using appBridge

#### Retrieving Settings

To access the complete settings Key-Value object, use the following method:

TypeScript Copy

9

1

2

3

4

5

6

7

›

// With the appSettings helper

const \[settings\] = appSettings<{'single-line': string}>();

settings\['single-line'\];

// Or through the appBridge

const settings = appBridge.state('settings').get();

#### Setting New Values

To assign new values to the settings. New settings will override the old values and leave existing values unchanged.

TypeScript Copy

9

1

2

3

4

5

6

›

// With the appSettings Helper

const \[settings, setSettings\] = appSettings<{'single-line': string}>();

setSettings({'single-line': 'new Value'});

// Or through the appBridge

appBridge.state('settings').set({ 'single-line': 'new Value' });

#### Example Usage

Here is an example that demonstrates how to get the state, set new values, and subscribe to changes:

JavaScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

›

⌄

// With the appSettings Helper

const \[settings, setSettings\] = appSettings<{'single-line': string}>();

settings\['single-line'\];

setSettings({'single-line': 'new Value'});

// With the appBridge

// Log the entire state

console.log(appBridge.state().get());

// Log the settings state

console.log(appBridge.state('settings').get());

// Set new values for the settings

appBridge.state('settings').set({ 'single-line': 'new Value' });

// Subscribe to settings Changes

appBridge.state('settings').subscribe((nextState, previousState) => {

console.log('Access to previous settings', previousState);

console.log('Access to next settings', nextState);

});

This subscription will notify you of any changes to the settings, allowing you to react accordingly.

### Configuring Settings in Development Mode

When running the application in development mode, a configuration button becomes available in the bottom right corner of the interface. This button provides access to the settings menu, enabling developers to customise the settings of the current development instance of the application. When adding/removing fields from the settings the App needs to be closed and reopen to appear.

Any configuration settings entered through this menu will be stored locally within the browser's local storage. These settings persist throughout the development process, ensuring that the configured data remains intact and accessible even if the browser is closed and reopened. However, it's important to note that these settings will be cleared once the local development application is disconnected. The use of defaultValues for the Settings does only work, when they are manually accepted again.

This mechanism allows developers to test and adjust application settings in a controlled environment without affecting the production setup or other development instances.

- ![Screenshot 2024-10-09 at 16.32.56](https://media.ffycdn.net/eu/weare/DaXMQRdQ7kNWWoYudLZS.png?width=488)

  Settings Menu

- ![Screenshot 2024-10-09 at 16.32.35](https://media.ffycdn.net/eu/weare/nqJ3NU6qq3nfSAQye6zB.png?width=488)

  Settings Menu closed

Marketplace

If the app has not yet been deployed and published, its Settings tab on the Marketplace says “No Settings.” For this feature, you will need to go to the marketplace to see the settings on the app details page. If you have not yet created and connected your app to the marketplace, refer to this [guide](/r/0GpN4x_8_ssmz9-cvYn8vS1bzFkZ0A6uxBaMh0alyGg).

![image4](https://media.ffycdn.net/eu/weare/VmYDTfVKJnyWr4odfKB6.png?width=1600&format=webp&quality=100)

App with no settings

Once the app has been [deployed and published](/r/i5oM_IV5KHE_Bo_Tc07Es_J9iduYCkG9yQ_PbD1uhsc) on the Marketplace, make sure to install it. After that the App Settings become visible:

![image3](https://media.ffycdn.net/eu/weare/drQC6Zrixxoa4yxLkZks.png?width=1600&format=webp&quality=100)

App with default settings

NB! The App Settings are only visible in the View mode. In the Edit mode, we are shown the following message:

![image1](https://media.ffycdn.net/eu/weare/wtRU4kqwDQ29YSytkaKK.png?width=1600&format=webp&quality=100)

App with settings in the Edit mode

Here’s what a more elaborate set of App Settings could look like:

JavaScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

import { defineSettings } from '@frontify/platform-app';

export const settings = defineSettings({

credentials: \[

{

type: 'input',

id: 'single-line',

label: 'Input field',

defaultValue: 'Input Field Value',

}

\],

compliance: \[

{

id: 'compliance-1',

type: 'sectionHeading',

label: 'Choose how generated images should be attributed',

blocks: \[

{

id: 'image-gen-check',

type: 'checklist',

choices: \[

{

id: 'created-by',

label: 'Attribute generated images (created by)',

},

{

id: 'include-prompt',

label: 'Include prompt in description',

},

\],

},

\],

},

\],

promptTemplate: \[

{

This translates to the following UI on the Marketplace:

![image2](https://media.ffycdn.net/eu/weare/WTF28J2ufLdtEmQ1BY4T.png?width=1600&format=webp&quality=100)

App with more elaborate set of settings

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## Secure Request

Secure Requests work best for JSON based Endpoints

In the previous section, you learned about integrating settings into your app via src/settings.ts to allow end-users to personalize their experience. However, certain sensitive settings, like API access keys, require a more protected approach to prevent exposure on the frontend.

We'll walk you through the process of securely defining these configurations, beginning with the inclusion of secrets in the manifest.json file.

In the manifest.json file, include the secrets array and define an object for each secret. Each object should contain a unique key and a corresponding label to be displayed in the frontend. Refer to the example below:

JSON Copy

9

1

2

3

4

›

⌄

"secrets": \[

{ "key": "THIRD_PARTY_API_KEY", "label": "Example Service" },

{ "key": "OTHER_THIRD_PARTY_API", "label": "Another API" }

\]

This is an example of what your JSON could look like:

JSON Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

33

34

35

36

›

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

⌄

{

"appId": <YOUR_APP_ID>,

"appType": "platform-app",

"name": <YOUR_APP_NAME>,

"metadata": {

"version": 1

},

"secrets": \[

{ "key": "THIRD_PARTY_API_KEY", "label": "Example Service" },

{ "key": "OTHER_THIRD_PARTY_API", "label": "Another API" }

\],

"network": {

"endpoints": \[

{

"name": "body-endpoint-id",

"resource": "https://jsonplaceholder.typicode.com/posts",

"options": {

"headers": {

"Content-type": "application/json"

},

"method": "POST",

"body": {

"title": "$$title$$",

"body": "%%THIRD_PARTY_API_KEY%%"

}

}

},

{

"name": "pagination-example-id",

"resource": "https://jsonplaceholder.typicode.com/posts/$$page$$",

"options": {

"headers": {

"Content-type": "application/json"

},

"method": "GET"

}

How to use it in an App

We offer two placeholders that can be used for value substitution:

Static Secret Key Replacement:

Use the pattern %%THE_SECRET%% to replace a secret key with its corresponding value. This pattern substitutes the secret key defined in the manifest with its value set in the marketplace.

- Manifest defines: {key: "THIRD_PARTY_API_KEY", label: "Label in the Marketplace"}
- Marketplace value: supersecretkey
- Usage: https://api.example.com/data?key=%%THIRD\_PARTY\_API\_KEY%%
- Result: https://api.example.com/data?key=supersecretkey

Dynamic Value Replacement:

Use the pattern $$dynamic-key$$ to replace placeholders with values passed to the method during the app's runtime. This is useful for scenarios like pagination in an endpoint. In this example, the $$page$$ placeholder is dynamically replaced with the value 1 provided during the method call.

- URL Template: https://jsonplaceholder.typicode.com/posts/$$page$$
- Method call in the payload:

  - payload: { endpoint: 'pagination-example-id', requestParams: { page: 2 } }

- Result: https://jsonplaceholder.typicode.com/posts/2

See below for a full code example!

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

›

⌄

⌄

⌄

export const ChildComponent = () => {

const appBridge = new AppBridgePlatformApp()

const onPress = async () => {

const output = await appBridge.api({

name: 'getSecureRequest',

payload: { endpoint: 'body-endpoint-id', requestParams: { title: "title" } },

});

const {data: { body, title }, status, statusText} = output;

console.log(status, statusText);

console.log(body, title);

};

return (

<div\>

<div\>

<button onClick={() => onPress()}>Call the secret-request</button>

</div>

</div>

);

};

Once the app has been [deployed and published](/r/i5oM_IV5KHE_Bo_Tc07Es_J9iduYCkG9yQ_PbD1uhsc) on the Marketplace, make sure to install it. After that the App Settings become visible:

![](https://media.ffycdn.net/eu/weare/8X5oFvVyGwfWY3pAH9a5.png?width=1600&format=webp&quality=100)

App with "Access Keys" section

The access keys section is now accessible on the settings tab of the app. Here, admins have the ability to securely save their access keys, as well as revoke or replace them as needed.

It's important to note that these keys are securely stored on our end and are never directly shared with the extension.

![Screenshot 2024-05-08 at 10.15.33](https://media.ffycdn.net/eu/weare/Ve2sZodfhwuaiTt93x33.png?width=833&format=webp&quality=100)

Securely save your Access Keys.

![](https://media.ffycdn.net/eu/weare/zSwDgbUNLHWPgUc4m8mc.png?width=812&format=webp&quality=100)

Option to Replace or Remove

### Configuring Local Testing for Secure Requests

To thoroughly test the secure requests locally, follow these detailed steps. Begin by creating a copy of the .secret-example.json file and renaming this copy to .secret.json. This file will be used to store the secret keys necessary for the secure requests. Next, open the newly created .secret.json file and add key-value pairs corresponding to the secret keys specified in your manifest.json file. Ensure that each key in the .secret.json file exactly matches the key names defined in the manifest.json, and assign the appropriate values to these keys.

For example, if your manifest.json contains entries like "apiKey": "your-api-key-here", ensure that your .secret.json includes:

JSON Copy

9

1

2

3

4

›

⌄

// .secret.json

{

"apiKey": "actual-api-key-value"

}

By populating the .secret.json file with these key-value pairs, your local environment will mimic the production environment, allowing you to securely test the requests without exposing sensitive information. Remember to keep the .secret.json file secure and avoid committing it to version control systems to prevent unintentional exposure of sensitive data.

Following these steps ensures that your local testing environment is properly configured, enabling you to validate the functionality of your requests before deploying them to a live environment.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## App user state

Each user has a corresponding appState, which can be accessed via the appBridge interface. To set, retrieve and subscribe the current state of a user, use the following commands:

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

24

25

26

27

28

29

30

31

32

›

⌄

// With the appUserState Helper

const\[userState, setUserState\] = appUserState<{'name': string}();

setUserState({name: 'sophie'})

console.log(userState) // { 'userState': { 'name': 'sophie' }}

console.log(userState.name) // 'sophie'

// With the appBridge

// This command sets the 'userState' with an object containing the 'test-app' key and its corresponding value.

appBridge.state('userState').set({ 'test-app': 'some input' });

// This command retrieves the current 'userState'.

const userState = appBridge.state('userState').get();

console.log(userState); // { 'test-app': 'some input' }

// Subscribe to changes in the userState

// This command subscribes to any changes in the 'userState'.

// The callback function receives the nextState and previousState as parameters.

appBridge.state('userState').subscribe((nextState, previousState) => {

// Log the previous state before the change

console.log('Access to previous state:', previousState);

// Log the new state after the change

console.log('Access to next state:', nextState.userState);

// If subscribed before the set command, it will log:

// { 'test-app': 'some input' }

});

A code example for the userState can be found in this [repository.](https://github.com/Frontify/sdk-apps-code-examples/tree/main/examples)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## Scopes

Scopes are permissions that dictate what your app can do with the data it interacts with through the API.

When defining scopes for your app, it is a good practice to limit the scope requests to the minimum necessary for the app’s functionality. This ensures that the application does not request excessive permissions.

### Available Scopes

There are five predefined scopes that provide varying levels of access to different API resources:

Scope

Description

`basic:read`

Basic read access to all brands, projects, and assets.

`basic:write`

Basic write access to all brands, projects, and assets.

`account:read`

Read access to account data, including user information.

`webhook:read`

Read access to webhooks.

`webhook:write`

Write access to webhooks, including installation and uninstallation.

### Specifying Scopes in the manifest.json

In your app's manifest.json file, you can define the necessary scopes adding the permissions section. For example, to include read and write access to basic resources, as well as access to account and webhook information, you would configure your manifest like this:

JSON Copy

9

1

2

3

4

5

›

⌄

⌄

{

"permissions": {

"scopes": \["basic:read", "basic:write", "account:read", "webhooks:read", "webhooks:write"\]

}

}

Your app will be restricted to performing actions that fall within these specified permissions.

![Authorize permissions dialogue v1 (1)](https://media.ffycdn.net/eu/weare/suLYxuTr3HZw1EfpykQk.png?width=600&format=webp&quality=75)

### Transparency and Admin Approval

For the sake of transparency, when your app is published to the marketplace, admins will be notified of the scopes your application requires before installation. The app installation will only proceed once the administrator reviews and authorizes the requested scopes.

(Authorize Scopes Dialog on the left, before installation on the Marketplace.)

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

- [Getting StartedQuick start](#/getting-started/quick-start)
- [Getting StartedMarketplace](#/getting-started/marketplace)

Last modified onTue, 21. Jan 2025 10:40

[![Home](https://media.ffycdn.net/eu/weare/AAc62UuS1kyXCK8EQ1Fo.svg?width={width})](https://developer.frontify.com)

Search

off-canvas-large

- [Home](/hub/484 "Home")

Introduction

- Getting started

Brand SDK

- Brand SDK
- Content blocks
- Apps

  - Getting Started
  - Reference

    - AppBridge API Method

      - getAssetResourceInformation
      - getCurrentUser
      - GetAccountId
      - createAsset
      - getSecureRequest
      - executeGraphQl (alpha)

    - Manifest
    - Glossary
    - Changelog

APIs

- GraphQL API
- Webhooks
- Asset Processing API
- Media Processing API (beta)
- [

  GraphQL Explorerexternal linkopens in a new tab

  ](https://frontify.github.io/public-api-explorer)

- [

  GraphQL Referenceexternal linkopens in a new tab

  ](https://frontify.github.io/graphql-reference/)

Widgets

- Finder
- Authenticator

- Developer Sandbox

Contact us

- [

  Bug reportexternal linkopens in a new tab

  ](https://forms.clickup.com/2523021/f/2czwd-124932/2OEP5X5S3O8SDM2MOO)

- [

  System statusexternal linkopens in a new tab

  ](https://status.frontify.com/)

- [

  Becoming a partnerexternal linkopens in a new tab

  ](https://www.frontify.com/en/partnership/)

# AppBridge API Method

## getAssetResourceInformation

#### Get information about assets

The getAssetResourceInformation API allows you to retrieve detailed information about a specific asset. This function is particularly useful for accessing URLs related to the asset, such as its preview, download, and source URLs.

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

⌄

const assetInformation = await appBridge.api({

name: 'getAssetResourceInformation',

payload: {

assetId: "frontify-asset-id", // For example context.assetId

},

});

#### Request Payload

- assetId (string, required): The unique identifier of the asset for which you want to retrieve information. This ID can be obtained from the context.

#### Response

The response is an object of type GetAssetResourceInformationResponse which contains the following properties:

- type (string): The type of the asset.
- id (string): The unique identifier of the asset.
- title (string, optional): The title of the asset.
- previewUrl (string, optional): A URL to a preview of the asset.
- downloadUrl (string, optional): A URL to download the asset.
- filename (string, optional): The filename of the asset.
- sourceUrl (string, optional): The source URL of the asset.
- html (string, optional): HTML content associated with the asset.

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

›

⌄

type GetAssetResourceInformationResponse = {

type: string;

id: string;

title?: string;

previewUrl?: string;

downloadUrl?: string;

filename?: string;

sourceUrl?: string;

html?: string;

};

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## getCurrentUser

#### Get information about the current user

The getCurrentUser API provides information about the currently authenticated user. This function is useful for retrieving user details such as their ID, name, avatar, and email address.

TypeScript Copy

9

1

2

3

4

›

⌄

const output = await appBridge.api({

name: 'getCurrentUser',

});

#### Request

No payload is required for this API call. The API call simply needs the name parameter set to getCurrentUser.

#### Response

The response is an object of type GetCurrentUserResponse which contains the following properties:

- id (string): The unique identifier of the current user.
- name (string, optional): The name of the current user.
- avatar (string, optional): The URL to the avatar image of the current user.
- email (string): The email address of the current user.

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

type GetCurrentUserResponse = {

id: string;

name?: string;

avatar?: string;

email: string;

};

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## GetAccountId

#### Get the account Id

The getAccountId API provides information about the current account. This function is useful for getting the ID of the Account.

TypeScript Copy

9

1

2

3

4

›

⌄

const output = await appBridge.api({

name: 'getAccountId',

});

#### Request

No payload is required for this API call. The API call simply needs the name parameter set to getAccountId.

#### Response

The response is an object of type GetAccountIdResponse which contains the following properties:

- id (string): The unique identifier of the current Account.

TypeScript Copy

9

1

2

3

›

⌄

type GetAccountIdResponse = {

id: string;

};

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## createAsset

#### Create an asset

The createAsset API allows you to create a new asset inside Frontify. This function can be used to upload files, images, or other types of data, and it supports additional data such as descriptions and tags.

TypeScript Copy

9

1

2

3

4

5

›

⌄

const assetId = await appBridge.api({name: 'createAsset', payload: {

data: "https://picsum.photos/200/300",

filename: "filename.png"

}});

#### Request Payload

The payload for the createAsset API should be an object of type CreateAssetPayload, which includes the following properties:

- data (File | Blob | string, required): The data to be uploaded. This can be a file, a Blob, or a URL as a string.
- filename (string, required): The name of the file being uploaded.
- parentId (string, optional): The ID of the parent folder or directory where the asset should be stored.
- description (string, optional): A description of the asset.
- externalId (string, optional): An external identifier for the asset.
- tags (Array of objects, optional): A list of tags to be associated with the asset. Each tag object should have a value property.

#### Response

The response is an object of type CreateAssetResponse which contains the following property:

- assetId (string): The unique identifier of the newly created asset.

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

›

⌄

⌄

⌄

export declare type CreateAssetPayload = {

data: File | Blob | string;

filename: string;

parentId?: string;

description?: string;

externalId?: string;

tags?: {

value: string;

}\[\];

};

export declare type CreateAssetResponse = {

assetId: string;

};

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## getSecureRequest

#### Secure Request

Get more information [from the Secure Request tab.](/r/8wtXz-_HBcowH43533gr0Tq0of9vLn5XRq5xHpP_Ea0)

TypeScript Copy

9

1

2

3

4

›

⌄

const output = await appBridge.api({

name: 'getSecureRequest',

payload: { endpoint: 'body-endpoint-id', requestParams: { title: "title" } },

});

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## executeGraphQl (alpha)

#### Execute a public GraphQL query / mutation

The executeGraphQl API allows you to execute any query / mutation available via Frontify's Public API.

Frontify's Public API Explorer: [https://frontify.github.io/public-api-explorer/](https://frontify.github.io/public-api-explorer/)  
﻿Frontify's GraphQL Reference: [https://frontify.github.io/graphql-reference/](https://frontify.github.io/graphql-reference/)

TypeScript Copy

9

1

2

3

4

›

⌄

const response = await appBridge.api({

name: 'executeGraphQl',

payload: { query, variables },

});

#### Request Payload

The payload for the executeGraphQl API should be an object of type ExecuteGraphQlPayload, which includes the following properties:

- query (string, required): A valid GraphQL query or mutation of Frontify's Public API.
- variables (object, optional): The variables object, if applicable.

#### Response

The response is an object of type ExecuteGraphQlResponse which contains the return value of the relevant GraphQL call.

TypeScript Copy

9

1

2

3

4

5

6

›

⌄

export declare type ExecuteGraphQlPayload = {

query: string;

variables?: Record<string, any\>;

};

export declare type ExecuteGraphQlResponse = Record<string, any\>;

Query without the variables object:

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

›

⌄

const query = \`

query CurrentUser {

currentUser {

id

email

avatar

name

}

}

\`;

const response = await appBridge.api({

name: 'executeGraphQl',

payload: { query },

});

Query with the variables object:

TypeScript Copy

99

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

21

22

23

›

⌄

const query = \`

query BrandLibraries($id: ID!) {

brand(id: $id) {

id

name

libraries(page: 1, limit: 25) {

total

items {

type: \_\_typename

id

name

}

}

}

}

\`;

const variables = { id: 'ey\[REDACTED\]' };

const response = await appBridge.api({

name: 'executeGraphQl',

payload: { query, variables },

});

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

- [Getting StartedMarketplace](#/getting-started/marketplace)
- [ReferenceManifest](#/reference/manifest)

Last modified onTue, 23. Jul 2024 12:51
