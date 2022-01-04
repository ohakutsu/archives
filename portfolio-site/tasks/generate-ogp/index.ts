import fs from 'fs'
import path from 'path'
import { OGPGenerator } from './ogp-generator'

const exportDirPath = path.join(__dirname, '../../public/ogp')
fs.mkdirSync(exportDirPath, { recursive: true })

// For top page
const generator = new OGPGenerator({
  text: 'ohakutsu.com',
  width: 1200,
  height: 630,
  exportFilePath: path.join(exportDirPath, 'ohakutsu-com.png'),
})

generator.build()
