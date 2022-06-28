import { validateEmptyAndEmail, validateEmptyAndLength3 } from './validators'

describe('Validators utils', () => {
  it('should returns an error with empty payload ', () => {
    expect(validateEmptyAndLength3()).toBe('*Este campo é obrigatório')
  })
  it('should returns an error with payload less 3 caracters', () => {
    expect(validateEmptyAndLength3('12')).toBe('*Este campo precisa de no mínimo 3 caracteres')
  })
  it('should returns true when input pass a correct param', () => {
    expect(validateEmptyAndLength3('1234')).toBe(true)
  })
  it('should returns an error with empty payload email', () => {
    expect(validateEmptyAndEmail()).toBe('*Este campo é obrigatório')
  })
  it('should returns an error with invalid email', () => {
    expect(validateEmptyAndEmail('breno')).toBe('*Este campo precisa ser um e-mail')
  })
  it('should return true when input pass a correct param email', () => {
    expect(validateEmptyAndEmail('bfroes58@gmail.com')).toBe(true)
  })
})
