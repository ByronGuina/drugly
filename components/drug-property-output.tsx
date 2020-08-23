import * as React from 'react'

type Props = {
    title: React.ReactNode
    value: string
    unit: string
}

export const DrugProperty = ({ title, value, unit }: Props) => {
    return (
        <div className="py-2 w-screen">
            <h2 className="text-sm">{title}</h2>
            <p className="tabular">
                <span className="font-bold text-2xl">{value}</span> <span className="text-sm opacity-75">{unit}</span>
            </p>
        </div>
    )
}
