import { GoogleGenerativeAI } from '@google/generative-ai'

// Initialize Gemini API
const genAI = new GoogleGenerativeAI(
  import.meta.env.PUBLIC_VITE_GEMINI_API_KEY ?? ''
)
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })

// Define the initial prompt with chatbot context
const systemPrompt = `
You are an AI assistant specialized in answering questions about Freilyn Bernabe based on his portfolio information. 
Use the provided details to respond accurately and concisely. Important: Answer in the language you were asked.

INSTRUCTIONS:
- LIMIT A RESPONDENT TO ONLY INFORMATION ABOUT FREILYN BERNABE
- ONLY ANSWER QUESTIONS ABOUT FREILYN BERNABE
- If you ask who you are or similar (Freilyn Bernabe's Personal Assistant)
- DETECT THE USER'S LANGUAGE AND RESPOND WITH IT

Profile:
- Name: Freilyn Bernabe
- Title: Software Engineer
- Description: I am a software engineer with a passion for building scalable and efficient web applications.
- Location: Santiago, Dominican Republic
- Contact: [${'https://cal.com/freilyn-bernabe-aooipq/15min'}](${'https://cal.com/freilyn-bernabe-aooipq/15min'})
- GitHub: [${'bernabedev'}](${'https://github.com/bernabedev'})
- LinkedIn: [${'bernabedev'}](${'https://linkedin.com/in/bernabedev'})
- Twitter: [${'bernabedev'}](${'https://x.com/bernabedev'})
- EMAIL [${'freilyn@bernabe.dev'}](${'mailto:freilyn@bernabe.dev'})

Projects:
1. **Marketplace Store Web** (Next.js) - [Link](https://www.bernalux.com)
2. **Marketplace Backend** (NestJS) - [API Docs](https://api.bernalux.com/reference)
3. **Marketplace Admin** (Next.js) - [Admin Panel](https://admin.bernalux.com)
4. **E-commerce Platform** (Vue.js) - [Demo](https://ecommerce.mundomovil.com.do)

Experience:
- **Senior Developer Web** at Minicode SRL (2021 - Present)
- **Developer Web** at ADGSystems (2020 - 4 months)
- **Freelancer** (2019 - 2020)

Skills:
- Node.js, Express.js, Nest.js, React, Next.js, TypeScript, JavaScript, Vue.js, Astro, Tailwind CSS, Bun.

Please answer in a professional and helpful tone based on this information. If a question is unrelated, politely redirect the user.
`

let messages: { role: 'user' | 'model'; content: string }[] = [
  { role: 'model', content: systemPrompt }
]

// Get DOM elements
const $input = document.querySelector('input') as HTMLInputElement | null
const $sendBtn = document.getElementById(
  'chat-send-btn'
) as HTMLButtonElement | null

/**
 * Handles Gemini's response streaming while disabling/enabling input
 */
export async function streamGeminiResponse(prompt: string): Promise<void> {
  try {
    // Disable input and send button while processing
    toggleChatControls(false)

    // Add user message to the chat history
    messages.push({ role: 'user', content: prompt })

    const result = await model.generateContentStream({
      contents: messages.map((msg) => ({
        parts: [{ text: msg.content }],
        role: msg.role
      }))
    })

    // Create an empty bot message in the UI
    let botMessage = createBotMessage()
    let botResponse = ''

    for await (const chunk of result.stream) {
      const chunkText = chunk.text()
      botResponse += chunkText
      updateBotMessage(botMessage, chunkText)
      scrollToBottom()
    }

    // Add AI response to the chat history
    messages.push({ role: 'model', content: botResponse })
  } catch (error) {
    console.error('Error in Gemini streaming:', error)
  } finally {
    // Enable input and send button after processing
    toggleChatControls(true)
  }
}

/**
 * Creates an empty bot message in the chat UI and returns it for live updates
 */
function createBotMessage(): HTMLElement {
  const $messages = document.getElementById('chat-messages') as HTMLElement
  let ul = $messages?.querySelector('ul')

  if (!ul) {
    ul = document.createElement('ul')
    ul.classList.add('flex', 'flex-col', 'gap-4')
    $messages?.appendChild(ul)
  }

  const li = document.createElement('li')
  li.id = 'bot-message-stream'
  li.classList.add(
    'flex',
    'flex-col',
    'gap-2',
    'rounded-2xl',
    'bg-gray-200',
    'px-4',
    'py-2',
    'w-fit',
    'self-start',
    'text-black',
    'text-sm',
    'dark:bg-white',
    'bg-primary',
    'self-start',
    'dark:text-black',
    'text-white'
  )

  const p = document.createElement('p')
  p.textContent = '' // Start empty to update during streaming
  li.appendChild(p)
  ul.appendChild(li)

  return li
}

/**
 * Updates the bot message in the UI by appending text in real-time
 */
function updateBotMessage(botMessage: HTMLElement, text: string): void {
  const p = botMessage.querySelector('p')
  if (p) p.textContent += text // Append new text to the existing message
}

/**
 * Toggles the input field and send button state
 * @param {boolean} isEnabled - True to enable, False to disable
 */
function toggleChatControls(isEnabled: boolean): void {
  if ($input) {
    $input.disabled = !isEnabled
    $input.style.opacity = isEnabled ? '1' : '0.5'
  }

  if ($sendBtn) {
    $sendBtn.disabled = !isEnabled
    $sendBtn.style.opacity = isEnabled ? '1' : '0.5'
  }
}

/**
 * Scrolls the chat container to the latest message
 */
function scrollToBottom(): void {
  const $messages = document.getElementById('chat-messages')
  if ($messages) {
    setTimeout(() => {
      $messages.scrollTop = $messages.scrollHeight
    }, 50) // Small delay to ensure UI updates first
  }
}
