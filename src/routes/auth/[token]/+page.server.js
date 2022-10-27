import { redirect, error } from "@sveltejs/kit"

export async function load({ params, fetch, cookies }) {
    if (!params.token) {
        throw error(400, "error.empty_token")
    }

    cookies.set("jwt_token", params.token, { path: "/" })

    try {
        const f = await fetch("/api/auth/wx_token/" + params.token)
        const res = await f.json()
        if (!res.ok) {
            throw new Error(res.msg)
        }
    } catch (e) {
        console.error(e)
        throw error(400, "error.invalid_token")
    }

    throw redirect(302, "/")
}
