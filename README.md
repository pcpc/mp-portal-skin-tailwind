# Tailwind CSS Playground

A simple starter project for playing around with Tailwind in a proper PostCSS environment.

### To get started:

1. Clone the repository:

    ```bash
    git clone https://github.com/tailwindcss/playground.git tailwindcss-playground

    cd tailwindcss-playground
    ```

2. Install the dependencies:

    ```bash
    # Using npm
    npm install

    # Using Yarn
    yarn
    ```

3. Install the TailwindCSS custom forms plugin:

  ```bash
  # Using npm
  npm install @tailwindcss/custom-forms

  # Using Yarn
  yarn add @tailwindcss/custom-forms
  ```

4. Add it to your `tailwind.config.js` file:

  ```js
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      require('@tailwindcss/custom-forms')
    ]
  }
  ```

##### Custom Forms Documentation

The project is still early but basic documentation can be found here:

[Read the documentation](https://tailwindcss-custom-forms.netlify.com/)


5. Start the development server:

    ```bash
    # Using npm
    npm run serve

    # Using Yarn
    yarn run serve
    ```

    Now you should be able to see the project running at localhost:8080.

6. Open `public/index.html` in your editor and start experimenting!

## Building for production

Even though this isn't necessarily a starter kit for a proper project, we've included an example of setting up both [Purgecss](https://www.purgecss.com/) and [cssnano](https://cssnano.co/) to optimize your CSS for production.

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn run production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.
