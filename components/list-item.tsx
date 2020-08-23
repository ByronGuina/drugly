import * as React from 'react'
import { motion } from 'framer-motion'
import { Drugs } from '@formulas/root'
import { sentenceCase } from '@utils/sentenceCase'

type Props = {
    drug: Drugs
    onClick: (drug: Drugs) => void
}

export const ListItem = ({ drug, onClick }: Props) => {
    return (
        <motion.div
            onClick={() => onClick(drug)}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-lg py-2 px-1 flex justify-between active rounded-lg"
        >
            {sentenceCase(drug)}
            {/* <Tag /> */}
        </motion.div>
    )
}

// TODO: Make tag infrastructure
// const Tag = () => {
//     return (
//         <div className="px-2 py-1 flex items-center justify-center text-xs bg-blue-200 text-blue-800 rounded-lg">
//             IV/Sedative
//         </div>
//     )
// }
