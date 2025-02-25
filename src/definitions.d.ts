export interface ChatBotMessage {
  role: 'user' | 'system' | 'bot'
  content: string
}
