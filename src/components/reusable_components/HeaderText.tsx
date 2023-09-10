import { ReactNode } from "react"

type Props = {
    children: ReactNode
}

function HeaderText({ children }: Props) {
  return (
    <h1 className="font-bold text-3xl font-montserrat">
        {children}
    </h1>
  )
}

export default HeaderText