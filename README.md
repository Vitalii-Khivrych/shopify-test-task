# Shopify Test Task (Shopify Skeleton Theme)

This project is a minimal and carefully structured Shopify theme called "Shopify Skeleton Theme". It is designed to help developers quickly start building Shopify themes, with an emphasis on modularity, maintainability, and adherence to Shopify's best practices.

## Technologies Used

  * **Liquid:** The template language used by Shopify.
  * **CSS:** Used for styling.
  * **JavaScript:** Applied for creating dynamic functionality.

## Installation and Running

Follow these steps to run and test the theme locally:

1.  **Prerequisites:**

      * Ensure you have the latest version of the [Shopify CLI](https://www.google.com/search?q=https://shopify.dev/docs/themes/tools/cli) installed.
      * For VS Code users, the [Shopify Liquid](https://marketplace.visualstudio.com/items?itemName=Shopify.theme-check-vscode) extension is recommended for syntax highlighting and other useful features.

2.  **Cloning the Repository:**
    You can clone the repository using Git:

    ```bash
    git clone https://github.com/Vitalii-Khivrych/shopify-test-task.git
    ```

    Or by using the Shopify CLI:

    ```bash
    shopify theme init
    ```

3.  **Running Locally:**
    Navigate to the project directory and start the local development server with the command:

    ```bash
    shopify theme dev
    ```

    This command allows you to preview your theme changes in real-time.

## Project Structure

The project follows the standard structure for Shopify themes, which ensures good code organization:

  * **/assets:** Contains all assets, such as CSS, JavaScript, and image files.
  * **/config:** Stores the theme's configuration files (`settings_data.json` and `settings_schema.json`).
  * **/layout:** Contains the main theme layout file (`theme.liquid`), which defines the overall structure of the pages.
  * **/locales:** Files for theme internationalization (translations into different languages).
  * **/sections:** Contains modular and reusable sections for pages.
  * **/snippets:** Small, reusable code snippets.
  * **/templates:** Templates for various page types (e.g., `product.json`, `cart.json`).
  * **package.json:** The file containing project dependencies and scripts.
