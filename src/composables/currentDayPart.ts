import { useNow } from "@vueuse/core"
import DayParts from "@/enums/dayParts"

export default function useCurrentDayPart(): string {
  const now = useNow()
  const hour = now.value.getHours()

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
