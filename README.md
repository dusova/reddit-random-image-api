# Reddit Random Image Fetcher

This project fetches random images from various subreddits using the Reddit API and displays them in a web application built with Express and EJS.

## Features

- Fetches random images from specified subreddits.
- Sorting options: hot, new, top.
- Time filtering options: hour, day, week, month, year, all.
- Simple and easy-to-use web interface.

## Technologies Used

- Node.js
- Express.js
- EJS (Embedded JavaScript templates)
- Node-fetch (for making HTTP requests)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/dusova/reddit-random-image-api.git
    cd reddit-random-image-api
    ```

2. Install the necessary dependencies:

    ```bash
    npm install
    ```

3. Start the application:

    ```bash
    node app.js
    ```

4. Open your web browser and go to `http://localhost:3000`.

## Usage

- Visit the homepage to see a random image from the selected subreddits.
- To view specific subreddits, go to `http://localhost:3000/:subreddit_name`.

## Example

- To view images from the "cats" subreddit, go to `http://localhost:3000/cats`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Feel free to submit issues or pull requests to improve the functionality or features of the application!

## Acknowledgements

- [Reddit API](https://www.reddit.com/dev/api)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)

Feel free to customize the content further!
