function chatbot() {
    return {
        messages: [
            {
                id: 1,
                role: 'assistant',
                content: 'Hello! I\'m your AI assistant. How can I help you today?'
            }
        ],
        currentMessage: '',
        loading: false,
        messageId: 2,

        newChat() {
            if (confirm('Are you sure you want to start a new chat? This will clear all messages.')) {
            this.messages = [
                
            ];
            this.currentMessage = '';
            this.messageId = 2;
            }
        },

        async sendMessage() {
            if (!this.currentMessage.trim() || this.loading) return;

            // Add user message to the messages array
            this.messages.push({
                id: this.messageId++,
                role: 'user',
                content: this.currentMessage
            });

            const userMessage = this.currentMessage;
            this.currentMessage = '';
            this.loading = true;

            this.$nextTick(() => {
                this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
            });

            try {
                const response = await this.chatWithOpenRouter(userMessage);
                
                this.messages.push({
                    id: this.messageId++,
                    role: 'assistant',
                    content: marked.parse(response)
                });
            } catch (error) {
                console.error('Chat error:', error);
                this.messages.push({
                    id: this.messageId++,
                    role: 'assistant',
                    content: 'Sorry, I encountered an error. Please try again.'
                });
            } finally {
                this.loading = false;
                this.$nextTick(() => {
                    this.$refs.messages.scrollTop = this.$refs.messages.scrollHeight;
                });
            }
        },

        async chatWithOpenRouter(message) {
            const apiKey = "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";
            
            // Get the last two messages (if available) to include in the context
            const recentMessages = this.messages.slice(-2).map(msg => ({
                role: msg.role,
                content: msg.content
            }));

            // Add the current user message
            const messagesToSend = [
                ...recentMessages,
                { role: "user", content: message }
            ];

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
                    messages: messagesToSend
                })
            });

            const data = await response.json();

            if (data.choices && data.choices[0]) {
                return data.choices[0].message.content;
            } else {
                throw new Error(data.error?.message || 'Unknown error');
            }
        }

    }
}