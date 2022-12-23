import { isPreCountdownBegin } from "../stores/countdown"

export const onPreCoundownBegin = () => {
  isPreCountdownBegin.set(true)
}