export async function handler(event) {
    const apiKey = process.env.API_KEY;

    const body = JSON.parse(event.body);

    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${apiKey}`,
            "Content-Type": "application/json",
            "HTTP-Referer": "https://your-site.com",
            "X-Title": "My Chat App"
        },
        body: JSON.stringify({
            model: "deepseek/deepseek-r1:free",
            messages: body.messages
        })
    });

    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data)
    };
}
