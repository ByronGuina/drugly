import * as React from 'react'
import { formulas, Drugs, allDrugs } from '@formulas/root'
import { GetStaticPaths, GetStaticProps } from 'next'
import { DrugOutput } from '@components/drug-output'
import { sentenceCase } from '@utils/sentenceCase'
import Link from 'next/link'
import { ChevronLeft } from 'react-feather'
import { motion } from 'framer-motion'

type Props = {
    drug: Drugs
}

export default function RangeDrugTemplate({ drug }: Props) {
    const [input, setInput] = React.useState(40)

    const onType = (e: React.ChangeEvent<HTMLInputElement>) => setInput(parseInt(e.target.value))

    const fn = formulas[drug]
    const result = fn(input)
    const drugName = sentenceCase(drug)

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.45 }}
            className="relative"
        >
            <Back />
            <div className="flex flex-col space-y-4">
                <h1 className="text-4xl font-bold">{drugName}</h1>
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
                <div className="flex flex-wrap">
                    {'mg' in result && <DrugOutput title="Starting mg" value={result.mg} />}
                    {'ml' in result && <DrugOutput title="Starting ml" value={result.ml} />}
                    {'startMg' in result && <DrugOutput title="Starting mg" value={result.startMg} />}
                    {'endMg' in result && <DrugOutput title="Ending mg" value={result.endMg} />}
                    {'startMl' in result && <DrugOutput title="Starting dose" value={result.startMl} />}
                    {'endMl' in result && <DrugOutput title="Ending dose" value={result.endMl} />}
                </div>
            </div>
        </motion.div>
    )
}

const Back = () => {
    return (
        <Link href="/">
            <a className="back flex items-center text-byron-indigo">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                    className="mr-1"
                >
                    <ChevronLeft size="1rem" />
                </motion.div>
                <motion.p layoutId="drugs" className="inline-block pr-3">
                    Drugs
                </motion.p>
            </a>
        </Link>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = allDrugs.map(d => ({
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
