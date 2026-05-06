import { HfInference } from '@huggingface/inference'

const hf = new HfInference(process.env.HF_API_KEY)

export async function processLLM(text: string) {
  const res = await hf.textGeneration({
    model: 'google/flan-t5-large',
    inputs: `Summarize this text: ${text}`
  })

  return res.generated_text
}