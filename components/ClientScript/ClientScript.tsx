import { useEffect } from "react"

type ClientScriptProps = {
  src: string
}

export const ClientScript = ({ src }: ClientScriptProps) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return
    }

    const script = document.createElement("script")
    script.src = src
    script.async = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [src])

  return null
}
