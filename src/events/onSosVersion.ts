import { sosVersion as sosVersionStore } from "../stores/version"

export const onSosVersion = (sosVersion: string) => {
    if (!sosVersion) return
    sosVersionStore.set(sosVersion)
}