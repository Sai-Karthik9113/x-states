﻿XLocation Selector Application
==============================

This application allows users to select their Country, State, and City sequentially. Each dropdown enables users to choose from relevant options, ensuring a smooth and intuitive user experience.

------------------------------------------------------------
CONTENTS
------------------------------------------------------------
a. Introduction  
b. Features  
c. Requirements  
d. Installation  
e. Usage  
f. Configuration  

------------------------------------------------------------
a. INTRODUCTION
------------------------------------------------------------
The XLocation Selector app is designed for educational purposes as part of a student project. It allows users to:
- Select a Country from a dynamically populated dropdown.
- Once a country is selected, the relevant States dropdown is activated.
- Finally, upon selecting a State, the City dropdown becomes available.

The app fetches location data through API requests to ensure users have access to up-to-date information.

------------------------------------------------------------
b. FEATURES
------------------------------------------------------------
- **Dynamic Dropdowns**: Country selection enables State selection, which enables City selection.
- **API Integration**: Uses axios for fetching location data from a remote endpoint.
- **User Feedback**: Displays the selected location once all options are chosen.

------------------------------------------------------------
c. REQUIREMENTS
------------------------------------------------------------
- **Node.js**: v14.0.0 or later.
- **React**: Ensure you have the necessary React libraries installed.
- **Axios**: Used for making API requests.

------------------------------------------------------------
d. INSTALLATION
------------------------------------------------------------
1. Clone the repository: git clone https://github.com/Sai-Karthik9113/x-states.git

2. Navigate to the project directory: cd x-states

3. Install dependencies: npm install

------------------------------------------------------------
e. USAGE
------------------------------------------------------------
1. Start the application: npm start

2. Open the application in your browser at `http://localhost:3000`.

3. **Usage Instructions**:
- Select a Country from the first dropdown.
- After a Country is selected, choose the corresponding State from the second dropdown.
- Finally, select a City from the third dropdown.
- The selected location will be displayed once all selections are made.

------------------------------------------------------------
f. CONFIGURATION
------------------------------------------------------------
- **API Endpoint**: The application fetches data from a predefined API endpoint specified in the `config` object in `App.js`.
- **To change the API endpoint**:
Open `App.js` and modify the `endpoint` value in the `config` object.

This project was created as part of a student curriculum to demonstrate skills in React, API integration, and state management.

Thank you for reviewing this project!
