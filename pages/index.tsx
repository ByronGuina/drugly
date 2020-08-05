import * as React from 'react'
import { formulas } from '@formulas/root'
import { DrugContainer } from '@components/drug-container'

// TODO:
// Create route for each drug statically
//   Map each drug to a template page -- i.e., not every drug page will be the same
//   Create searchable list of drugs. Clicking a drug routes you to the drug page
//   Clicking back takes you to the drug list
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
const IndexPage = () => {
    return (
        <div>
            <DrugContainer drug="propafol" fns={formulas} />
        </div>
    )
}

export default IndexPage
