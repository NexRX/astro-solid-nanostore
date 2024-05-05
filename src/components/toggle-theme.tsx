import { persistentAtom } from "@nanostores/persistent"
import { useStore } from "@nanostores/solid"
import { onMount } from "solid-js";

export const $theme = persistentAtom<"light" | "dark">("theme", "dark")

export default function ToggleTheme() {
    const theme = useStore($theme);

    onMount(() => {
        console.log(`On Mount... Atom value = '${$theme.get()}' | Store value = '${theme()}'`)
    })

    return (<li class="link-card">
        <h2>
            Active Theme
        </h2>
        <p>
            {theme()} <br />
            Dark?: 
            <input type="checkbox" checked={theme() === "dark"} onChange={(e) => {
                $theme.set(e.target.checked ? "dark" : "light")
            }} />
            <br />
            <button onClick={() => console.log(`Atom value = '${$theme.get()}' | Store value = '${theme()}'`)}>Log Theme State</button>
        </p>
    </li>
    )
}