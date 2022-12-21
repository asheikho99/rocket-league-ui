import type { Payload, PayloadData } from "../types"

export const EventProcessor = (messageEvent: Payload) => {
  const event: string = messageEvent?.event
  const data: PayloadData = messageEvent?.data
}