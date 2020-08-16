import * as React from 'react'

type Props = {
    title: React.ReactNode
    value: number
    unit: string
}

export const DrugOutput = ({ title, value, unit }: Props) => {
    return (
        <div className="py-5 w-40">
            <h2 className="text-sm">{title}</h2>
            <p className="tabular">
                <span className="font-bold text-2xl">{value.toFixed(2)}</span>{' '}
                <span className="text-sm opacity-75">{unit}</span>
            </p>
        </div>
    )
}
