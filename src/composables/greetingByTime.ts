import greetings from "../assets/greetings.json"
import useCurrentDayPart from "./currentDayPart"
import useRandomNumberInRange from "./randomNumberInRange"

export default function useGreetingByTime(name: string): string {
  const currentDayPart = useCurrentDayPart()
  const currentGreetings = greetings[currentDayPart]
  const randomNumber = useRandomNumberInRange(0, currentGreetings.length)

  const greeting = currentGreetings[randomNumber] ?? "Hello"

  return `${greeting}, ${name}!`
}
