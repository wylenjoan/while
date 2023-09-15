import DayParts from "@/enums/dayParts"

export default function useDayPart(hour?: number): string {
  if (!hour) {
    return DayParts.ANYTIME
  }

  if (hour >= 5 && hour < 12) {
    return DayParts.MORNING
  }

  if (hour < 13) {
    return DayParts.NOON
  }

  if (hour < 18) {
    return DayParts.AFTERNOON
  }

  if (hour < 21) {
    return DayParts.EVENING
  }

  return DayParts.NIGHT
}
