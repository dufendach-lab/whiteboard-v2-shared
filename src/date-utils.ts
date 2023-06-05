export function toFhirDateTime(date: Date) {
  return date.toISOString()
}

export function toFhirDate(date: Date) {
  const offset = date.getTimezoneOffset()
  date = new Date(date.getTime() + (offset*60*1000))
  return date.toISOString().split('T')[0]
}
