import * as React from 'react'
import { formulas, Drugs } from '@formulas/root'

type Props = {
    drug: Drugs
}

export default function RangeDrugTemplate({ drug }: Props) {
    const [input, setInput] = React.useState(40)

    const onType = (e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))

    const fn = formulas[drug]
    const result = fn(input)

    return (
        <div className="flex flex-col items-center space-y-4">
            <div className="flex flex-col items-start">
                <label>{drug.toUpperCase()}</label>
                <input
                    min="1"
                    type="number"
                    value={input}
                    onChange={onType}
                    placeholder="Enter weight in kg (i.e. 50)"
                />
            </div>
            <p>
                {'startMg' in result && (
                    <div className="font-mono">
                        Starting mg: <b>{result.startMg}</b>
                    </div>
                )}
                {'endMg' in result && (
                    <div className="font-mono">
                        Ending mg: <b>{result.endMg}</b>
                    </div>
                )}
                {'startMl' in result && (
                    <div className="font-mono">
                        Starting dose: <b>{result.startMl}</b>
                    </div>
                )}
                {'endMl' in result && (
                    <div className="font-mono">
                        Ending dose: <b>{result.endMl}</b>
                    </div>
                )}
            </p>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = Object.keys(formulas).map(d => ({
        params: { drug: d },
    }))

    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            drug: params.drug,
        },
    }
}
