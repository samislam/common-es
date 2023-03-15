import { dirname } from 'path'
import { fileURLToPath } from 'url'

export default function getGlobals(url: string) {
  const __filename = fileURLToPath(url)
  const __dirname = dirname(__filename)
  return { __filename, __dirname }
}
