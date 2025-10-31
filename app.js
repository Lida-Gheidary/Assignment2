// Assignment 2: Fetch, async/await, API, JSON, and array methods

// Main async function to fetch and process meal data
async function fetchAndProcessMeals() {
  try {
    // Step 1: Fetch data from TheMealDB API
    // Using the search endpoint to get multiple meals (searching for 'a' returns many results)
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');

    // Step 2: Parse the JSON response
    const data = await response.json();

    // Step 3: Extract the meals array from the response
    const meals = data.meals;

    console.log('=== ASSIGNMENT 2 RESULTS ===\n');

    // TASK 1: Print the first 5 names of meals in alphabetical order
    console.log('--- Task 1: First 5 Meal Names (Alphabetical) ---');
    const sortedMealNames = meals
      .sort((a, b) => a.strMeal.localeCompare(b.strMeal))
      .slice(0, 5)
      .map(meal => meal.strMeal);

    sortedMealNames.forEach(name => console.log(name));
    console.log('\n');

    // TASK 2: Print all meals that contain a given category
    console.log('--- Task 2: Meals in "Dessert" Category ---');
    const categoryToFind = 'dessert'; // Change this to search for different categories

    const mealsInCategory = meals.filter(meal =>
      meal.strCategory.toLowerCase() === categoryToFind.toLowerCase()
    );

    mealsInCategory.forEach(meal => {
      console.log(`Name: ${meal.strMeal}, Category: ${meal.strCategory}`);
    });
    console.log('\n');

    // TASK 3: Create object showing count of meals per category
    console.log('--- Task 3: Meal Count by Category ---');
    const categoryCount = meals.reduce((acc, meal) => {
      // Get the category name
      const category = meal.strCategory;

      // If category already exists in accumulator, increment count
      // Otherwise, initialize it to 1
      if (acc[category]) {
        acc[category]++;
      } else {
        acc[category] = 1;
      }

      return acc;
    }, {});

    console.log(categoryCount);
    console.log('\n');

    // STRETCH GOAL 1: Group by key function
    console.log('--- Stretch Goal 1: Group by Category ---');
    const groupedByCategory = groupBy(meals, 'strCategory');

    // Print only the keys and how many items in each group
    Object.keys(groupedByCategory).forEach(category => {
      console.log(`${category}: ${groupedByCategory[category].length} meals`);
    });
    console.log('\n');

    // STRETCH GOAL 2: Select & reshape into compact summaries
    console.log('--- Stretch Goal 2: Compact Meal Summaries ---');
    const compactSummaries = meals.slice(0, 3).map(meal => {
      // Extract ingredients (TheMealDB has ingredients in strIngredient1-20 format)
      const ingredients = [];
      for (let i = 1; i <= 20; i++) {
        const ingredient = meal[`strIngredient${i}`];
        if (ingredient && ingredient.trim() !== '') {
          ingredients.push(ingredient);
        }
      }

      return {
        id: meal.idMeal,
        name: meal.strMeal,
        category: meal.strCategory,
        ingredients: ingredients
      };
    });

    console.log(compactSummaries);
    console.log('\n');

    // STRETCH GOAL 3: Build frequency map of all ingredients
    console.log('--- Stretch Goal 3: Ingredient Frequency Map ---');
    const ingredientFrequency = buildIngredientFrequency(meals);
    console.log(ingredientFrequency);

  } catch (error) {
    console.error('Error fetching meals:', error);
  }
}

// STRETCH GOAL 1: groupBy function
// Groups an array of items by a specified key
function groupBy(items, key) {
  return items.reduce((acc, item) => {
    // Get the value of the specified key
    const groupKey = item[key];

    // If this group doesn't exist yet, create it as an empty array
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }

    // Add the current item to the appropriate group
    acc[groupKey].push(item);

    return acc;
  }, {});
}

// STRETCH GOAL 3: Build ingredient frequency map
// Counts how many times each ingredient appears across all meals
function buildIngredientFrequency(meals) {
  return meals.reduce((acc, meal) => {
    // Loop through all 20 possible ingredient slots
    for (let i = 1; i <= 20; i++) {
      const ingredient = meal[`strIngredient${i}`];

      // Only count non-empty ingredients
      if (ingredient && ingredient.trim() !== '') {
        const ingredientName = ingredient.trim();

        // Increment count or initialize to 1
        if (acc[ingredientName]) {
          acc[ingredientName]++;
        } else {
          acc[ingredientName] = 1;
        }
      }
    }

    return acc;
  }, {});
}

// Call the main function to start the program
fetchAndProcessMeals();
