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

APIs

- GraphQL API

  - Introduction
  - Changes
  - Access Control
  - Details & Concepts
  - Deep Dive

    - GraphQL
    - Upload File & Create Asset

      - Allowed file types
      - 1\. Initialize the Upload
      - 2\. Upload binary file content
      - 3\. Use the file

    - Search and Filter Asset
    - Asset Workflow
    - Custom Metadata
    - Digital & Print Templates - External Data Sources
    - Asset Preview and Download
    - Template Data Fetching and Exporting

  - Use Cases

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

# Upload File & Create Asset

Learn how to upload Files and create Assets based on a File

In Frontify, an Asset is not equal to a file. Though most Assets consist of a File, this is not a must. Therefore, the process of uploading a File is separated from creating an Asset based on a File.



Frontify supports uploading of large Files directly to S3. There is no limit in file size. The process is separated in 3 steps:



1.  Initialize the Upload (GraphQL)
2.  Upload the binary file content directly to S3
3.  Use the File to create an Asset, Attachment, or more.

Let's deep dive into the steps:

---

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## Allowed file types

Executable files are generally disallowed. This includes but is not limited to exe, dmg, cmd, sh, bat.

Depending on where you create an asset, different rules might apply:

Where

Allowed File Types

Asset in `MediaLibrary`

**All**

Asset in `IconLibrary`

`**svg**`

Asset in `LogoLibrary`

`**svg**`, `**jpg**`, `**jpeg**`, `**ai**`, `**eps**`, `**png**`, `**tif**`, `**tiff**`

Asset in `DocumentLibrary`

**All**

Asset in`Workspace`

**All**

`Attachment`

**All**

---

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## 1\. Initialize the Upload

The first step is to initialize the Upload. You need to pass a filename (including a file extension), the file size, and optionally the chunk size.



This call will return you a file ID and a set of signed s3 upload URLs. How many you get depends on the file size and the chunk size you specified (defaults to 100 Mb).

UploadFile

CopycurlTypeScriptPHPPython

Open in Explorer

mutation UploadFile($input: UploadFileInput!) {

uploadFile(input: $input) {

id

urls

}

}

xxxxxxxxxx

{

"input": {

"filename": "my-file.png",

"size": 1212134,

"chunkSize": 104857600

}

}

basic:read

basic:write

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## 2\. Upload binary file content

From the initialize call, you get a set of URLs and the File Id. You can now use the upload URLs to upload the binary content of the file directly to S3.



To do so, make a PUT request with the binary content of the chunk directly as the body.

Copy to clipboard

TypeScriptPHPPython

​x

1

// Chunk size in bytes

2

const CHUNK_SIZE \= 100 \* 1024 \* 1024;

3

​

4

// Path to your local file

5

const FILE_PATH \= 'your local file path'

6

​

7

// URLs from uploadFile mutation

8

const UPLOAD_URLS \= \[

9

'https://s3.eu-central-1.amazonaws.com/\[...\]',

10

'https://s3.eu-central-1.amazonaws.com/\[...\]'

11

\]

12

​

13

const readFileStream \= createReadStream(FILE_PATH, {highWaterMark: CHUNK_SIZE});

14

​

15

for await (const data of readFileStream) {

16

const url \= UPLOAD_URLS.shift();

17

​

18

await fetch(url, {

19

method: 'PUT',

20

headers: {

21

'content-type': 'binary'

22

},

23

body: data

24

});

25

}

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

## 3\. Use the file

❗️Important: A file can only be used once in a creation action.

Now that all chunks of the file have been uploaded you can use the file. In this example, we will use the file to create a new Asset.



One important field that might be useful is the externalId. This refers to an ID (255 char max) from another system. This is especially useful for syncing use cases. You can store an additional identifier that you can use to find an Asset by the ID in your system, eliminating the need for an additional mapping table.

CreateAsset

CopycurlTypeScriptPHPPython

Open in Explorer

xxxxxxxxxx

mutation CreateAsset($input: CreateAssetInput!) {

createAsset(input: $input) {

job {

assetId

}

}

}

xxxxxxxxxx

{

"input": {

"fileId": "<ID From init Upload>",

"projectId": "<Library|Project ID>",

"title": "Asset title, could be filename",

"description": "...",

"externalId": "",

"tags": \[

{

"value": "My-Tag"

}

\],

"directory": \[

"My Folder",

"Subfolder"

\]

}

}

basic:read

basic:write

To pick up a draggable item, press the space bar. While dragging, use the arrow keys to move the item. Press space again to drop the item in its new position, or press escape to cancel.

- [Deep DiveGraphQL](#/deep-dive/graphql)
- [Deep DiveSearch and Filter Asset](#/deep-dive/search-and-filter-asset)

Last modified onWed, 04. Dec 2024 19:09
