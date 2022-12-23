import { isRoundedStartedGo } from "../stores/round"

export const onRoundStartedGo = () => {
  isRoundedStartedGo.set(true)
}