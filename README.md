# Food Recipe App

Welcome to the Food Recipe App! This application allows users to search for recipes, view detailed instructions, and see the ingredients needed. The app is built with React and Vite, utilizing the Spoonacular API to fetch recipe data.

## Features

- **Search Recipes**: Users can search for recipes by entering keywords.
- **View Instructions**: Detailed cooking instructions are provided for each recipe.
- **Ingredients List**: View all the ingredients needed for a selected recipe.

## Demo

![Home Page](./images/home-page.png)

## Installation

To get a local copy up and running, follow these steps.

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later) or yarn (v1.x or later)

### Installation Steps

1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/food-recipe-app.git
   cd food-recipe-app
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Set up the Spoonacular API:**

   - Sign up at [Spoonacular](https://spoonacular.com/food-api) and get your API key.
   - Create a `.env` file in the root of the project and add your API key:
     ```sh
     VITE_SPOONACULAR_API_KEY=your_api_key_here
     ```

4. **Run the app:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Search for a Recipe:**
   - Enter a keyword in the search bar and press enter or click the search button.
   - The app will display a list of recipes that match the search query.

2. **View Recipe Details:**
   - Click on a recipe from the search results to view detailed instructions and ingredients.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling
- [Spoonacular API](https://spoonacular.com/food-api) - An API to get food-related data

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - [@your_twitter_handle](https://twitter.com/your_twitter_handle) - your_email@example.com

Project Link: [https://github.com/yourusername/food-recipe-app](https://github.com/yourusername/food-recipe-app)

---

### Acknowledgments

- [Spoonacular](https://spoonacular.com/food-api) for their API
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)

---

Feel free to customize this README to fit your project's needs!
