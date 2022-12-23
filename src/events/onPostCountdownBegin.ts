import { isPostCountdownBegin } from "../stores/countdown"

export const onPostCountdownBegin = () => {
  isPostCountdownBegin.set(true)
}