# Beer Recipe App with Zustand

This is a simple beer recipe app that fetches beer recipes from the [Punk API](https://api.punkapi.com/v2/beers) and displays them in a list. The app uses Zustand as the state management library to handle the data and user interactions.

## Features

- Fetches and stores a list of beer recipes from the Punk API.
- Displays 15 beer recipes at a time.
- Allows users to select multiple beer recipes by clicking on them with the right mouse button. The "Delete" button appears when at least one recipe is selected.
- Users can deselect a recipe by clicking on it again.
- Users can click on a recipe card with the left mouse button to navigate to a separate page displaying the details of the selected recipe.
- When there are no more recipes to display on the current page, the app fetches the next 25 recipes from the API.

## Additional Parameters

- Only 5 beer recipes are visible on the screen at a time.
- The total number of displayed recipes is always 15.

## Lazy Loading

The app implements lazy loading functionality using the `react-intersection-observer` library. When the user scrolls to the bottom of the list, the first 5 recipes are removed from the view, and the next 5 recipes are added to the display. This way, the user can see 5 new recipes while the total number of displayed recipes remains 15.

## Instructions

To run the app locally, follow these steps:

1. Clone the repository to your local machine.
2. Navigate to the project directory and run `npm install` to install the dependencies.
3. Run `npm start` to start the development server.
4. Open your web browser and go to `http://localhost:3000` to view the app.

Enjoy exploring different beer recipes and managing your selected recipes with this beer recipe app! Cheers! 🍻
