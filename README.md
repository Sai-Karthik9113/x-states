# XLocationSelector

XLocationSelector is a React-based project for selecting and displaying locations hierarchically by country, state, and city. It fetches data dynamically from an external API endpoint and uses React's `useState` and `useEffect` hooks to manage state and API calls.

## Features
- **Dynamic Dropdowns**: Selection options dynamically update based on user input for country, state, and city.
- **API Integration**: Fetches data from the configuration-defined API endpoint.
- **Controlled Components**: Implements controlled components for dropdown menus to track user input.
- **Error Handling**: Handles potential API failures gracefully.
- **Responsive UI**: Styled with CSS for a user-friendly, visually appealing layout.

## Technologies Used
- **React**: For building the UI and managing state.
- **Axios**: For making HTTP requests to fetch country, state, and city data.
- **CSS Modules**: For styling the components.
- **JavaScript**: To manage state and handle data dynamically.

## How It Works
1. On page load, the app fetches a list of countries and populates the first dropdown menu.
2. When a country is selected, it fetches the corresponding states and updates the state dropdown.
3. Similarly, selecting a state triggers fetching of associated cities and populates the city dropdown.
4. Displays the selected country, state, and city dynamically below the dropdowns.

## How to Run the Project Locally

1. Clone the repository:
   ```
   git clone https://github.com/Sai-Karthik9113/x-states.git
   ```
2. Navigate to the project directory:
   ```
   cd x-states
   ```
3. Install the dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```
5. Open the app in your browser at `http://localhost:3000`.

## Usage

1. Open the app in your browser.
2. Select a **Country** from the dropdown. The app will dynamically fetch and display the list of states corresponding to the selected country.
3. Select a **State** to load the cities available for that state.
4. Finally, select a **City**. 
5. Your final selection will be displayed as:  
   *"You selected [City], [State], [Country]"*.

This makes the app user-friendly for navigating hierarchical location data seamlessly.

## Screenshots

Here's how the XLocationSelector app operates:

**App Load View**

![XStates][on page load]

**Country and State Dropdown Interaction**

![XStates][states getting unlocked after selecting country]

**City Selection and Confirmation**

![XStates][city behaviour and output]



## License

This project is licensed under the MIT License.

---------------------------------------------------------
This is a student project developed as part of a React.js learning exercise.



[on page load]: src/assets/images/image.png
[states getting unlocked after selecting country]: src/assets/images/20241213-1042-48.4166339_2_1.gif
[city behaviour and output]: src/assets/images/20241213-1042-48.4166339_1_1.gif