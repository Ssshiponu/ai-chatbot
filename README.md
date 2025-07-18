# Shipon AI Chatbot

Shipon AI Chatbot is a web-based intelligent assistant powered by Deepseek-R1. It provides real-time answers and smart interactions using a modern UI built with Tailwind CSS, Alpine.js, and Markdown rendering.

## Features

- Chat with an AI assistant powered by Deepseek-R1
- Markdown support for rich message formatting
- Responsive and modern UI
- Serverless backend using Netlify Functions
- Easy deployment to Netlify

## Project Structure

- [`index.html`](index.html): Main HTML file and UI
- [`bot.js`](bot.js): Alpine.js chatbot logic
- [`markdown.css`](markdown.css): Custom Markdown styles
- [`netlify/functions/chat.js`](netlify/functions/chat.js): Netlify serverless function for AI chat
- [`netlify.toml`](netlify.toml): Netlify configuration
- [`robots.txt`](robots.txt): Robots and sitemap info
- [`sitemap.xml`](sitemap.xml): Sitemap for SEO
- `shiponai.png`: Favicon/logo

## Getting Started

1. **Clone the repository**  
   ```sh
   git clone https://github.com/yourusername/shipon-ai-chatbot.git
   cd shipon-ai-chatbot
   ```

2. **Set up API Key**  
   Add your OpenRouter API key as an environment variable (`API_KEY`) in Netlify dashboard.

3. **Deploy to Netlify**  
   Push your code to GitHub and connect your repository to Netlify for automatic deployment.

## Usage

- Open [`index.html`](index.html) in your browser or visit your deployed Netlify site.
- Type your question and interact with Shipon AI.

## License

This project is licensed under the MIT License. See [`LICENSE`](LICENSE) for details.

---

**Author:** Mohin Uddin Shipon  
**Demo:** [https://shiponai.netlify.app](https://shiponai.netlify.app)