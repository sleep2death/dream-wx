import { writable } from "svelte/store"

export let CurrentTab = writable("home")
export let DreamSettings = writable({
    steps: 50,
    scale: 7.5,
    seed: 1024
})
