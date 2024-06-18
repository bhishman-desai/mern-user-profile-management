# Assignment 1

For the User Profile Management feature, this assignment involves several key stages. Initially, task flow diagrams are created to map out the user's interactions and ensure a seamless experience. Following this, a low-fidelity prototype, or wireframe, is developed to outline the basic structure and layout, emphasizing functionality over design. Finally, a semi-functional prototype is built using React.

* *Date Created*: 22 MAY 2024
* *Last Modification Date*: 27 MAY 2024
* *Prototype’s URL*: https://bhishman-a1-user-profile-management.netlify.app/
* *Git URL*: https://git.cs.dal.ca/bdesai/csci-5709-assignments



## Authors

* [Bhishman Desai] - (bhishman@dal.ca)




## Getting Started


### Steps to Set Up the Project

   ```
   git clone https://git.cs.dal.ca/bdesai/csci-5709-assignments

   cd Assignment1/client
   
   npm install
	
   npm start
  ```



### Prerequisites

```  
Node environment (v20.13.1)
```  


### Installing

You'd be able to check if node is installed on your system with the below command.
  ```
  node -v
  ```
If you see a version number, node is installed on your system.



## Deployment

I deployed my Assignment 1 project using GitHub and Netlify. First, I created a new private repository on GitHub and pushed my project code to it. Then, I imported this repository into Netlify, configured the build settings, and initiated the deployment. The application was successfully deployed and is now live at the [specified link](https://bhishman-a1-user-profile-management.netlify.app/).



## Built With
* [React](https://react.dev/learn) - The web framework used
* [npm](https://docs.npmjs.com) - Dependency Management



## Sources Used

### Background.png

The image used in this project was sourced from [Pexels](https://www.pexels.com/).


### validate.js

*Lines 50 - 76*

``` js
function passwordVerify(errors = {}, values) {
  
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const lowerCase = /[a-z]/;
  const upperCase = /[A-Z]/;
  const number = /[0-9]/;

  if (!values.password) {
    errors.password = toast.error("Password Required!");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid Password!");
  } else if (values.password.length < 8) {
    errors.password = toast.error(
      "Password must be at least 8 characters long!",
    );
  } else if (!specialChars.test(values.password)) {
    errors.password = toast.error("Password must contain a special character!");
  } else if (!lowerCase.test(values.password)) {
    errors.password = toast.error("Password must contain a lowercase letter!");
  } else if (!upperCase.test(values.password)) {
    errors.password = toast.error("Password must contain an uppercase letter!");
  } else if (!number.test(values.password)) {
    errors.password = toast.error("Password must contain a number!");
  }

  return errors;
}   
  
```  

The code above was created by adapting the code in [Wiktor Stribiżew](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a) as shown below:


```js

"^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$"

```

[Wiktor Stribiżew](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)'s code was used because I wanted to add regex checks for password validation and wanted to make sure that I don't miss out on any edge cases.

[Wiktor Stribiżew](https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a)'s code was modified by breaking down the regex into different regex each serving their own purpose.

### convert.js

*Lines 1 - 15*

``` js
/* Image to base64 */
export default function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result)
        }

        fileReader.onerror = (error) => {
            reject(error)
        }
    })
}
  
```  

The code above was created by adapting the code in [Dmitri Pavlutin](https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript) as shown below:


```js
function getBase64(file) {
   var reader = new FileReader();
   reader.readAsDataURL(file);
   reader.onload = function () {
     console.log(reader.result);
   };
   reader.onerror = function (error) {
     console.log('Error: ', error);
   };
}

var file = document.querySelector('#files > input[type="file"]').files[0];
getBase64(file); // prints the base64 string
```



[Dmitri Pavlutin](https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript)'s code was used because I wanted to convert file to base64 in JavaScript. This is mainly to let users upload their profile pictures at the time of user registration process.

[Dmitri Pavlutin](https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript)'s code was modified by instead of directly logging the result or error, I wrapped the FileReader operations within a Promise for my use case. This way I was able to use resolve to return the base64 string upon successful reading and reject to handle any errors.

## Acknowledgments

* I was impressed by Wiktor Stribiżew's approach to password validation using a comprehensive regex pattern. His code inspired me to break down the regex into individual checks to ensure a thorough validation process without missing any edge cases.
* I am grateful to Dmitri Pavlutin for his clear and effective method of converting a file to base64 in JavaScript. His solution provided the foundation for my implementation, which involved wrapping the FileReader operations within a Promise to better handle asynchronous operations and improve the user experience during the profile picture upload process.
