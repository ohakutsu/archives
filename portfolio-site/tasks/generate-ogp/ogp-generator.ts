import { createCanvas, loadImage } from 'canvas'
import fs from 'fs'
import path from 'path'

interface Props {
  text: string
  width: number
  height: number
  exportFilePath: string
}

export class OGPGenerator {
  private readonly text: string
  private readonly width: number
  private readonly height: number
  private readonly exportFilePath: string
  private readonly lineHeight = 48

  constructor({ text, width, height, exportFilePath }: Props) {
    this.text = text
    this.width = width
    this.height = height
    this.exportFilePath = exportFilePath
  }

  async build() {
    const canvas = createCanvas(this.width, this.height)
    const context = canvas.getContext('2d')

    const ogpBaseImage = await loadImage(path.join(__dirname, 'ogp-base.png'))
    context.drawImage(ogpBaseImage, 0, 0, this.width, this.height)

    context.font = `bold ${this.lineHeight}px Roboto`
    context.fillStyle = '#424242'

    const lines = this.splitByMeasureWidth({
      text: this.text,
      maxWidth: this.height,
      context,
    })

    lines.forEach((line, index) => {
      const text = context.measureText(line)
      const positionFix = 48
      context.fillText(
        line,
        (this.width - text.width) / 2,
        positionFix +
          (this.height - this.lineHeight * lines.length) / 2 +
          this.lineHeight * index
      )
    })

    canvas.toBuffer((err, chunk) => {
      if (err) return console.error(err)

      fs.writeFile(this.exportFilePath, chunk, (err) => {
        if (err) return console.error(err)

        console.log(`Generated: ${this.exportFilePath}`)
      })
    })
  }

  private splitByMeasureWidth({
    text,
    maxWidth,
    context,
  }: {
    text: string
    maxWidth: number
    context: CanvasRenderingContext2D
  }) {
    const chars = Array.from(text)
    let line = ''
    const lines = []

    for (let i = 0; i < chars.length; i++) {
      if (context.measureText(line + chars[i]).width > maxWidth) {
        lines.push(line)
        line = chars[i]
      } else {
        line += chars[i]
      }
    }
    lines.push(line)

    return lines
  }
}
