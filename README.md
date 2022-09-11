<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these steps.

### Prerequisites

 1. Create a `.env file` and add it to the root folder

 2. Open `.env file` and add the following to it. (you can choose whatever port number you like)
   ```sh
      PORT=8000
   ```
### Using Docker

   if you don't have node & npm installed on your machine, use the following

  1. Build a Docker instance
   ```sh
   docker build --tag national-id-api .  
   ```
  2. run docker (same port number as used in `.env`)
   ```sh
   docker run -p 8000:8000 national-id-api
   ```
### Using npm


  1. Install packages
   ```sh
   npm install  
   ```
  2. run server
   ```sh
   npm start
   ```
### Run tests

   ```sh
   npm test  
   ```
  


## API EndPoint
GET Request
```sh
   http://localhost:8000/ID/{ID_NUMBER}
```
Responses

<table>
  <tr>
    <th>Type</th>
    <th>Request</th>
    <th>Response</th>
    <th>Status</th>
  </tr>

  <tr>
    <td>Valid ID</td>  
    <td>ID/{NationalID}</td>
    <td>
      {
        "birthday": "{BIRTHDAY}",
        "birthGovernorate": "{GOVERNORATE}",
        "gender": "{GENDER}"
      }
    </td>
    <td> 200</td>
  </tr>
   <tr>
    <td>Invalid ID</td>  
    <td>ID/{NationalID}</td>
    <td>
      {
        "message": "{ERROR_MESSAGE}"
      }
    </td>
    <td> 400</td>
  </tr>
</table>




<!-- ACKNOWLEDGMENTS -->
## Resources


* [Main reference for the National ID structure and Governorates codes ](https://ar.m.wikipedia.org/wiki/%D8%A8%D8%B7%D8%A7%D9%82%D8%A9_%D8%A7%D9%84%D8%B1%D9%82%D9%85_%D8%A7%D9%84%D9%82%D9%88%D9%85%D9%8A_%D8%A7%D9%84%D9%85%D8%B5%D8%B1%D9%8A%D8%A9)
* [Governorates Names](https://en.wikipedia.org/wiki/Governorates_of_Egypt)
* [Last digit needs to be between 1-9](https://lawyeregypt.net/%D8%A3%D8%B3%D8%A6%D9%84%D8%A9-%D8%B4%D8%A7%D8%A6%D8%B9%D8%A9/%D9%85%D8%A7%D8%B0%D8%A7-%D9%8A%D8%B9%D9%86%D9%89-%D8%A7%D9%84-14-%D8%B1%D9%82%D9%85-%D8%A7%D9%84%D8%AE%D8%A7%D8%B5%D8%A9-%D8%A8%D8%A8%D8%B7%D8%A7%D9%82%D8%A9-%D8%A7%D9%84%D8%B1%D9%82%D9%85-%D8%A7/)


