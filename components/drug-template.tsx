import * as React from 'react'
import { formulas, Drugs } from '@formulas/root'
import { DrugOutput } from '@components/drug-output'
import { sentenceCase } from '@utils/sentenceCase'
import { Minus } from 'react-feather'
import { concentration, dosage, fentanylConcentration } from '@formulas/templates'
import { RangeOutput } from './range-output'
import { DrugProperty } from './drug-property-output'

type Props = {
    drug: Drugs
}

export const DrugTemplate = ({ drug }: Props) => {
    const [input, setInput] = React.useState(40)

    const onType = (e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))

    const fn = formulas[drug]
    const value = isNaN(input) ? 0 : input
    const result = fn(value)
    const drugName = sentenceCase(drug)

    // TODO Fix these names

    const concentrationUnit = drugName === 'Fentanyl' ? fentanylConcentration : concentration

    return (
        <div className="flex flex-col">
            <Minus className="self-center" size="3rem" color="#707070" />
            <h1 className="text-4xl font-bold mb-2">{drugName}</h1>
            <div className="flex flex-col items-start space-y-2 mb-6">
                <label className="text-sm">Weight (kg)</label>
                <input
                    className="px-4 py-2 rounded-lg text-md bg-byron-background"
                    min="1"
                    type="number"
                    step={1}
                    value={input}
                    onChange={onType}
                    placeholder="Enter weight in kg"
                />
            </div>
            <div className="flex flex-col">
                {'mg' in result && <DrugOutput title="Concentration" value={result.mg} unit={concentrationUnit} />}
                {'ml' in result && <DrugOutput title="Dosage" value={result.ml} unit={dosage} />}
                {'startMg' in result && 'endMg' in result && (
                    <RangeOutput
                        title="Concentration"
                        start={result.startMg}
                        end={result.endMg}
                        unit={concentrationUnit}
                    />
                )}
                {'startMl' in result && 'endMl' in result && (
                    <RangeOutput title="Dosage" start={result.startMl} end={result.endMl} unit={dosage} />
                )}
                <DrugProperty title="Onset" value={result.onset} unit="seconds" />
                <DrugProperty title="Peak" value={result.peak} unit="minutes" />
                <DrugProperty title="Duration" value={result.duration} unit="minutes" />
                <DrugProperty title="Elimination" value={result.elimination} unit="" />
            </div>
        </div>
    )
}
