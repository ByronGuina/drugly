export const sentenceCase = (str: string) => {
    if (!str) return false

    return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase())
}
