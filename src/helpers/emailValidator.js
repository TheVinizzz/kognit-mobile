export function emailValidator(email) {
  const re = /\S+@\S+\.\S+/
  if (!email) return "Digite seu email"
  if (!re.test(email)) return 'Ooops! Digite um email válido'
  return ''
}
