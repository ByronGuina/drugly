import * as React from 'react'

type Props = {
    title: React.ReactNode
    value: number
    unit: string
}

export const DrugOutput = ({ title, value, unit }: Props) => {
    return (
        <div className="py-5 w-40">
            <h2 className="text-md font-mono">{title}</h2>
            <p className="tabular font-sans text-xl">
                <span>{value}</span> <span className="text-md font-mono">{unit}</span>
            </p>
        </div>
    )
}
