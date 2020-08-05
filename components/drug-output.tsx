import * as React from 'react'

type Props = {
    children: React.ReactNode
}

export const DrugOutput = ({ children }: Props) => {
    return <p className="font-mono">{children}</p>
}
