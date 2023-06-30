export function passwordValidator(password) {
  if (!password) return "Digite sua senha"
  if (password.length < 5) return 'Sua senha deve ter no mínimo 5 carácteres'
  return ''
}
