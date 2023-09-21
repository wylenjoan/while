import greetings from "@/assets/greetings.json"
import useRandomNumberInRange from "./randomNumberInRange"

export default function useGreetingByTime(dayPart: string): string {
  const greetingsObj: Record<string, string[]> = greetings;
  const currentGreetings = greetingsObj[dayPart]
  const randomNumber = useRandomNumberInRange(0, currentGreetings.length)

  return currentGreetings[randomNumber] ?? "Hello"
}
