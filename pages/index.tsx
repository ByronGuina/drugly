import * as React from 'react'
import { allDrugs } from '@formulas/root'
import Link from 'next/link'
import { sentenceCase } from '@utils/sentenceCase'
import { motion } from 'framer-motion'
import { Search } from '@components/search'

// TODO:
// Compile list of drugs
//   What inputs do we want for each drug?
//   What outputs do we want for each drug?
// Compile list of unique formulas
//   Figure out how to differentiate formulas based on drug
// Design Pages (everything mobile first)
//   Template pages
//   Search page
// Create drug template pages
//   Use rxjs for the calculation side effects and value entries
// Write tests
//   formulas
//   drug page entry + result + edge cases (should not be able to enter strings into drugs)
// Get unique domain name
// Make PWA
//    Service worker
// Design language?
//   iOS? Spotify? Destiny? BetterLayout? Reboot? Monospace?
//   Brutalist-ish and typography focused. Black-white + colored accents
//   Slide-up panel ala iOS instead of completely separate page?
// Animate numbers changing in drug page
// Gesture-based navigation
// Favoriting drugs
// Drug tags

const IndexPage = () => {
    const [drugs, setDrugs] = React.useState(allDrugs)

    const DrugsList = drugs.map(drug => (
        <Link href={`/drugs/[drug]`} as={`/drugs/${drug}`} key={drug}>
            <motion.a initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-xl py-2 px-1">
                {sentenceCase(drug)}
            </motion.a>
        </Link>
    ))

    const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const filteredDrugs = allDrugs.filter(drug => drug.includes(e.target.value.toLowerCase()))
        setDrugs(filteredDrugs)
    }

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: 'tween', ease: 'easeOut', duration: 0.45 }}
        >
            <motion.h1 className="px-1 mb-2 text-5xl font-bold tracking-tight inline-block" layoutId="drugs">
                Drugs
            </motion.h1>
            <Search placeholder="Search for a drug" onChange={onSearch} />
            <div className="flex flex-col">{DrugsList}</div>
        </motion.main>
    )
}

export default IndexPage
