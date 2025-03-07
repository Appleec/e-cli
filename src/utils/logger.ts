import c from 'ansis'

export const info = (value: string) =>
  console.log(c.cyan(value))

export const success = (value: string) =>
  console.log(c.green(value))

export const warn = (value: string) =>
  console.log(c.yellow(value))

export const error = (value: string) =>
  console.log(c.red(value))
