import * as React from 'react'
import { allDrugs, Drugs } from '@formulas/root'
import { motion, PanInfo, AnimatePresence } from 'framer-motion'
import { Search } from '@components/search'
import { DrugTemplate } from '@components/drug-template'
import { ListItem } from '@components/list-item'

// TODO:
// Compile list of drugs
//   What inputs do we want for each drug?
//   What outputs do we want for each drug?
// Compile list of unique formulas
//   Figure out how to differentiate formulas based on drug
// Create drug template pages
//   Use rxjs for the calculation side effects and value entries
// Write tests
//   formulas
//   drug page entry + result + edge cases (should not be able to enter strings into drugs)
// Get unique domain name
// Make PWA
//    Service worker
// Design language?
//   iOS? Mercury?
//   Slide-up panel ala iOS instead of completely separate page?
// Animate numbers changing in drug page
// Gesture-based navigation
//   Favoriting
// Favoriting drugs
// Drug tags + filtering
//   Filtering UI
// Setup GitHub Actions for CI
//   Tests
const IndexPage = () => {
    const [selectedDrug, setSelectedDrug] = React.useState(null)
    const [drugs, setDrugs] = React.useState(allDrugs)

    const DrugsList = drugs.map(drug => <ListItem key={drug} drug={drug as Drugs} onClick={setSelectedDrug} />)

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredDrugs = allDrugs.filter(drug => drug.includes(e.target.value.toLowerCase()))
        setDrugs(filteredDrugs)
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.45 }}
            className="layout"
        >
            <motion.h1 className="mb-2 text-4xl font-bold tracking-tight inline-block" layoutId="drugs">
                Drugs
            </motion.h1>

            <Search placeholder="Search for a drug" onChange={onSearch} />

            <div className="flex flex-col">{DrugsList}</div>

            <AnimatePresence>
                {selectedDrug && <DrugModal setOpen={setSelectedDrug} drug={selectedDrug} />}
            </AnimatePresence>
        </motion.main>
    )
}

export default IndexPage

type DrugModalProps = {
    drug: Drugs
    setOpen: (value: string | null) => void
}

const DrugModal = ({ drug, setOpen }: DrugModalProps) => {
    const onClose = (_, info: PanInfo) => {
        if (info.offset.y > 300) {
            setOpen(null)
        }
    }

    return (
        <motion.div
            key={drug}
            drag="y"
            onDragEnd={onClose}
            dragConstraints={{
                top: 0,
                bottom: 0,
            }}
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            exit={{ y: 1000 }}
            transition={{
                type: 'spring',
                damping: 22,
                stiffness: 200,
            }}
            className="drug left-0 absolute rounded-xl shadow-xs h-screen w-screen"
        >
            <DrugTemplate drug={drug} />
        </motion.div>
    )
}
