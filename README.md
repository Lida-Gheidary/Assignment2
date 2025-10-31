# Assignment 2 – Fetch Data from TheMealDB API

A web project that fetches meal data from TheMealDB API and processes it using JavaScript array methods. The results display in the browser console, demonstrating fetch, async/await, JSON parsing, and array manipulation.

## How It Works

- **HTML** (index.html) creates the structure: a simple page with a heading and an interactive tooltip directing users to check the console.
- **CSS** (style.css) styles the page with Varela font, background image, gradient tooltip with pulsing animation, and a bouncing arrow pointing to the console location.
- **JavaScript** (app.js) fetches meal data from TheMealDB API and processes it using array methods like map, filter, reduce, sort, and slice.

The files are connected in index.html:

<link rel="stylesheet" href="style.css">
<script src="app.js"></script>

CSS loads first (in <head>) so the page looks good right away. JavaScript loads at the end of <body> so it doesn't run before the HTML is ready.

## What happens when you open the page?

1. The page loads and immediately runs fetchAndProcessMeals() in app.js
2. JavaScript uses fetch() to call TheMealDB API: https://www.themealdb.com/api/json/v1/1/search.php?f=a
3. The API returns JSON data containing an array of meals with names, categories, ingredients, and instructions
4. JavaScript processes the data using array methods and logs results to the console:
   - **Task 1**: Sorts meals alphabetically and displays the first 5 names
   - **Task 2**: Filters meals by category (e.g., "Dessert") and lists them
   - **Task 3**: Counts how many meals exist in each category using reduce()
   - **Stretch Goal 1**: Groups meals by category using a custom groupBy() function
   - **Stretch Goal 2**: Creates compact meal summaries with extracted ingredients
   - **Stretch Goal 3**: Builds a frequency map showing how often each ingredient appears

Open the browser console (F12) to see all the processed results.

## How to Run

1. Open index.html in any browser
2. Press **F12** to open the Developer Console
3. View the formatted results displaying all tasks and stretch goals
4. Explore the processed meal data in the console output

## Project Requirements Met

- ✅ Fetches data from TheMealDB API using fetch() and async/await
- ✅ Parses JSON response and extracts meal data
- ✅ Uses .sort() to arrange meals alphabetically
- ✅ Uses .slice() to get the first 5 items
- ✅ Uses .map() to transform and extract specific data fields
- ✅ Uses .filter() to find meals matching a category
- ✅ Uses .reduce() to count categories and build frequency maps
- ✅ Uses for loops to extract ingredients from numbered fields
- ✅ Implements custom groupBy() function (Stretch Goal)
- ✅ Creates compact meal summaries (Stretch Goal)
- ✅ Builds ingredient frequency map (Stretch Goal)
- ✅ All code is commented and submitted to GitHub

## Array Methods Used

- **.sort()** - Arranges meals in alphabetical order
- **.slice()** - Extracts the first 5 items from an array
- **.map()** - Transforms meal objects into simplified formats
- **.filter()** - Selects only meals matching specific criteria
- **.reduce()** - Accumulates data to count categories and ingredients
- **.forEach()** - Iterates through arrays to print console output
- **.push()** - Adds ingredients to arrays during extraction
