export const prerender = false

import { GoogleGenerativeAI } from '@google/generative-ai'
import type { APIRoute } from 'astro'

// Get the API key from environment variables
const apiKey = import.meta.env.GEMINI_API_KEY

if (!apiKey) {
  throw new Error('Gemini API Key not found in environment variables.')
}

// Initialize the Gemini client
const genAI = new GoogleGenerativeAI(apiKey)
const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' })

// Define the system prompt (Hidden from the frontend)
const systemPrompt = `
You are an AI assistant specialized in answering questions about Freilyn Bernabe based on his portfolio information.
Respond in the language you are asked and limit your answers only to the provided information.

Profile:
- Name: Freilyn Bernabe
- Title: Software Engineer
- Description: I am a software engineer passionate about building scalable and efficient web applications.
- Location: Santiago, Dominican Republic
- Contact: <a href="https://cal.com/freilyn-bernabe-aooipq/15min" target="_blank" rel="noopener noreferrer" class="chat-link">Appointment</a>
- GitHub: <a href="https://github.com/bernabedev" target="_blank" rel="noopener noreferrer" class="chat-link">bernabedev</a>
- LinkedIn: <a href="https://linkedin.com/in/bernabedev" target="_blank" rel="noopener noreferrer" class="chat-link">bernabedev</a>
- Twitter: <a href="https://x.com/bernabedev" target="_blank" rel="noopener noreferrer" class="chat-link">bernabedev</a>
- Email: <a href="mailto:freilyn@bernabe.dev" class="chat-link">freilyn@bernabe.dev</a>

Projects:
1. **Marketplace Store Web** (Next.js) - <a href="https://www.bernalux.com" target="_blank" rel="noopener noreferrer" class="chat-link">Link</a>
2. **Marketplace Backend** (NestJS) - <a href="https://api.bernalux.com/reference" target="_blank" rel="noopener noreferrer" class="chat-link">API Docs</a>
3. **Marketplace Admin** (Next.js) - <a href="https://admin.bernalux.com" target="_blank" rel="noopener noreferrer" class="chat-link">Admin Panel</a>
4. **E-commerce Platform** (Vue.js) - <a href="https://ecommerce.mundomovil.com.do" target="_blank" rel="noopener noreferrer" class="chat-link">Demo</a>
5. **GemCommit** (TypeScript) - <a href="https://marketplace.visualstudio.com/items?itemName=bernabe.gemcommit" target="_blank" rel="noopener noreferrer" class="chat-link">VS Code Marketplace</a>

Experience:
- **Senior Web Developer** at Minicode SRL (2021 - Present)
- **Web Developer** at ADGSystems (2020 - 4 months)
- **Freelancer** (2019 - 2020)

Skills:
- Node.js, Express.js, Nest.js, React, Next.js, TypeScript, JavaScript, Vue.js, Astro, Tailwind CSS, Bun.

EXPLICIT INSTRUCTIONS:
1. If the question is not related to Freilyn Bernabe, respond politely that you can only provide information about him.
2. When including links in responses, wrap them inside <a> tags with the following attributes: 
   - href="{URL}"
   - rel="noopener noreferrer"
   - target="_blank"
   - class="chat-link"
3. When referring to a link, always use the text inside the square brackets [ ] from the original source as its title. Do not invent or modify titles.
`

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.text()
    const data = body ? JSON.parse(body) : {}
    const { prompt } = data

    if (!prompt) {
      return new Response(JSON.stringify({ error: 'Falta el prompt' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      })
    }

    const messages = [
      { role: 'model', content: systemPrompt },
      { role: 'user', content: prompt }
    ]

    const result = await model.generateContentStream({
      contents: messages.map((msg) => ({
        parts: [{ text: msg.content }],
        role: msg.role
      }))
    })

    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of result.stream) {
            const textChunk = chunk.text()
            controller.enqueue(new TextEncoder().encode(textChunk))
          }
        } catch (err) {
          console.error('Error en el stream:', err)
          controller.enqueue(
            new TextEncoder().encode('Error en la generación de contenido.')
          )
        } finally {
          controller.close()
        }
      }
    })

    return new Response(stream, {
      status: 200,
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked'
      }
    })
  } catch (error) {
    console.error('Error en la API de Gemini:', error)
    return new Response(
      JSON.stringify({ error: 'Error procesando la solicitud' }),
      {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  }
}
