import * as React from 'react'

type Props = {
    title: React.ReactNode
    value: React.ReactNode
}

export const DrugOutput = ({ title, value }: Props) => {
    return (
        <div className="py-5 w-40">
            <h2 className="text-md font-mono">{title}</h2>
            <p className="tabular text-xl font-bold">{value}</p>
        </div>
    )
}
