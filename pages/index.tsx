import * as React from 'react'
import { formulas } from '@formulas/root'
import Link from 'next/link'
import { sentenceCase } from '@utils/sentenceCase'
import { motion } from 'framer-motion'

// TODO:
// Create route for each drug statically
//   Map each drug to a template page -- i.e., not every drug page will be the same
//   Create searchable list of drugs. Clicking a drug routes you to the drug page
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
// Swap to Inter
// Design language?
//   iOS? Spotify? Destiny? BetterLayout? Reboot? Monospace?
//   Brutalist-ish and typography focused. Black-white + colored accents
//   Slide-up panel ala iOS instead of completely separate page?
// Gesture-based navigation
// Favoriting drugs
const IndexPage = () => {
    const drugs = Object.keys(formulas).map(drug => (
        <Link onClick={() => window.navigator.vibrate(200)} href={`/drugs/[drug]`} as={`/drugs/${drug}`} key={drug}>
            <a className="text-xl py-2 px-1">{sentenceCase(drug)}</a>
        </Link>
    ))

    return (
        <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <motion.h1 className="px-1 mb-4 text-5xl font-bold tracking-tight relative inline-block" layoutId="drugs">
                Drugs
            </motion.h1>
            <div className="w-full flex flex-col">{drugs}</div>
        </motion.main>
    )
}

export default IndexPage
