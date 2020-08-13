import * as React from 'react'
import { formulas, Drugs } from '@formulas/root'
import { GetStaticPaths, GetStaticProps } from 'next'
import { DrugOutput } from '@components/drug-output'
import { sentenceCase } from '@utils/sentenceCase'

type Props = {
    drug: Drugs
}

export default function RangeDrugTemplate({ drug }: Props) {
    const [input, setInput] = React.useState(40)

    const onType = (e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))

    const fn = formulas[drug]
    const result = fn(input)

    return (
        <div className="flex flex-col space-y-4">
            <h1 className="text-4xl font-bold">{sentenceCase(drug)}</h1>
            <div className="flex flex-col items-start space-y-2">
                <label className="text-lg">Weight (kg)</label>
                <input
                    className="px-4 py-2 rounded-lg text-xl"
                    min="1"
                    type="number"
                    step={1}
                    value={input}
                    onChange={onType}
                    placeholder="Enter weight in kg (i.e. 50)"
                />
            </div>
            <div className="space-y-1">
                {'mg' in result && (
                    <DrugOutput>
                        mg: <b>{result.mg}</b>
                    </DrugOutput>
                )}
                {'ml' in result && (
                    <DrugOutput>
                        Starting ml: <b>{result.ml}</b>
                    </DrugOutput>
                )}
                {'startMg' in result && (
                    <DrugOutput>
                        Starting mg: <b>{result.startMg}</b>
                    </DrugOutput>
                )}
                {'endMg' in result && (
                    <DrugOutput>
                        Ending mg: <b>{result.endMg}</b>
                    </DrugOutput>
                )}
                {'startMl' in result && (
                    <DrugOutput>
                        Starting dose: <b>{result.startMl}</b>
                    </DrugOutput>
                )}
                {'endMl' in result && (
                    <DrugOutput>
                        Ending dose: <b>{result.endMl}</b>
                    </DrugOutput>
                )}
            </div>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = Object.keys(formulas).map(d => ({
        params: { drug: d },
    }))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    return {
        props: {
            drug: params.drug,
        },
    }
}
