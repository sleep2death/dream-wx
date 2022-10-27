import { error } from '@sveltejs/kit';

export async function load({ fetch }) {
    try {
        const url = "/api/user/is_new"
        const f = await fetch(url)
        if (f.status !== 200) {
            throw new Error(f.statusText + ": " + url)
        }

        const res = await f.json()
        if (!res.ok) {
            throw new Error(res.msg)
        }

        return {
            user: {
                initialized: res.init
            }
        }
    } catch (e) {
        throw error(500, "internal_error")
    }
}

export const ssr = false
