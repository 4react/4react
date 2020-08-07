export type Location = string[]

export const parseLocation = (pathName: string): Location => {
  if (pathName === '/') return []

  return pathName
    .replace(/^\//, '')
    .replace(/\/$/, '')
    .split('/')
}
