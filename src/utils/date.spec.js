import { getDiffTimeBetweenCurrentDate } from './date'

describe('Format date', () => {
  it('should return date when input is null, undefined, false, true', () => {
    expect(getDiffTimeBetweenCurrentDate(null)).toBe(null)
  })
  it('should return date when input is an invalid date', () => {
    expect(getDiffTimeBetweenCurrentDate('25-01-2022')).toBe('25-01-2022')
  })
  // os resultado serão alterados com o passar do tempo os seguintes testes
  it('should return format date when input is a validate date with different month', () => {
    expect(getDiffTimeBetweenCurrentDate('Tue May 28 2022 19:44:51 GMT-0300 (Hora padrão de Brasília)')).toBe('32 dias atrás')
  })
  // it('should return format date when input is a validate date with same month but yesterday', () => {
  //   expect(getDiffTimeBetweenCurrentDate('Tue Jun 27 2022 19:44:51 GMT-0300 (Hora padrão de Brasília)')).toBe('1 dia atrás')
  // })
  // it('should return formate date when input is a validate date with same month but one hour ago', () => {
  //   expect(getDiffTimeBetweenCurrentDate('Tue Jun 28 2022 18:44:51 GMT-0300 (Hora padrão de Brasília)')).toBe('1 hora atrás')
  // })
  // it('should return formate date when input is a validate date with same month but minutos ago', () => {
  //   expect(getDiffTimeBetweenCurrentDate('Tue Jun 28 2022 19:34:51 GMT-0300 (Hora padrão de Brasília)')).toBe('20 minutos atrás')
  // })
  // it('should return formate date when input is a validate date with same month but seconds ago', () => {
  //   expect(getDiffTimeBetweenCurrentDate('Tue Jun 28 2022 19:55:01 GMT-0300 (Hora padrão de Brasília)')).toBe('50 segundos atrás')
  // })
})
