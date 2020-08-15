import * as React from 'react'
import { formulas, Drugs } from '@formulas/root'
import { DrugOutput } from '@components/drug-output'
import { sentenceCase } from '@utils/sentenceCase'
import { Minus } from 'react-feather'

type Props = {
    drug: Drugs
}

export const DrugTemplate = ({ drug }: Props) => {
    const [input, setInput] = React.useState(40)

    const onType = (e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))

    const fn = formulas[drug]
    const result = fn(input)
    const drugName = sentenceCase(drug)

    return (
        <div className="flex flex-col">
            <Minus className="self-center" size="3rem" color="#707070" />
            <h1 className="text-4xl font-bold mb-2">{drugName}</h1>
            <div className="flex flex-col items-start space-y-2 mb-6">
                <label className="text-md font-mono">Weight (kg)</label>
                <input
                    className="px-4 py-2 rounded-lg text-lg bg-byron-background"
                    min="1"
                    type="number"
                    step={1}
                    value={input}
                    onChange={onType}
                    placeholder="Enter weight in kg (i.e. 50)"
                />
            </div>
            <div className="flex flex-wrap">
                {'mg' in result && <DrugOutput title="Starting mg" value={result.mg} />}
                {'ml' in result && <DrugOutput title="Starting ml" value={result.ml} />}
                {'startMg' in result && <DrugOutput title="Starting mg" value={result.startMg} />}
                {'endMg' in result && <DrugOutput title="Ending mg" value={result.endMg} />}
                {'startMl' in result && <DrugOutput title="Starting dose" value={result.startMl} />}
                {'endMl' in result && <DrugOutput title="Ending dose" value={result.endMl} />}
            </div>
        </div>
    )
}
