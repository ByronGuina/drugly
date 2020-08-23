import * as React from 'react'

type Props = {
    title: React.ReactNode
    start: number
    end: number
    unit: string
}

export const RangeOutput = ({ title, start, end, unit }: Props) => {
    return (
        <div className="py-2">
            <h2 className="text-sm">{title}</h2>
            <p className="tabular">
                <span className="font-bold text-xl">{start.toFixed(2)}</span> –{' '}
                <span className="font-bold text-xl">{end.toFixed(2)}</span>{' '}
                <span className="text-sm opacity-75">{unit}</span>
            </p>
        </div>
    )
}
