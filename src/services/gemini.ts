let messages: { role: 'user' | 'model'; content: string }[] = []

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
    toggleChatControls(false)

    // Create an empty message in the UI
    let botMessage = createBotMessage()
    let botResponse = ''

    const response = await fetch('/api/ai/portfolio', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    })

    if (!response.ok) {
      throw new Error(`Error en la API: ${response.statusText}`)
    }

    const reader = response.body?.getReader()
    if (!reader) throw new Error('No se pudo obtener el stream.')

    const decoder = new TextDecoder()

    while (true) {
      const { done, value } = await reader.read()
      if (done) break

      const chunk = decoder.decode(value, { stream: true })
      botResponse += chunk
      updateBotMessage(botMessage, chunk)
      scrollToBottom()
    }

    messages.push({ role: 'model', content: botResponse })
  } catch (error) {
    console.error('Error en la API de chat:', error)
  } finally {
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
    'dark:bg-white/10',
    'bg-primary',
    'self-start',
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
