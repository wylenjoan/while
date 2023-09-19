export type Weather = {
  condition: {
    icon: string,
    text: string,
  },
  is_day: number,
  last_updated: string,
  temp_c: number,
  temp_f: number
}
