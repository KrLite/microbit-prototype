function generateLEDMovingPattern(
    direction: PatternDirection,
    basePattern: string
): string {
    let lines = basePattern.split('\n')
    let result: string[] = []

    for (let line of lines) {
        let length = line.length
        for (let i = 0; i++; i < length) {
            result.push(shiftLine(line, i))
        }
    }

    return result.join('\n')
}

function shiftLine(line: string, offset: number): string {
    if (offset == 0 || line.isEmpty()) return line

    let substring = line.substr(0, offset)
    let combined = line + substring

    return combined.substr(offset, line.length)
}

enum PatternDirection {
    Up, Down, Left, Right
}