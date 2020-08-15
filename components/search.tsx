import * as React from 'react'
import { Search as SearchIcon } from 'react-feather'

type Props = {
    placeholder: string
    inputClassNames?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export const Search = ({ inputClassNames = '', ...props }: Props) => {
    const inputStyles = `rounded-lg focus:shadow-outline focus:outline-none py-2 pr-4 pl-10 placeholder-byron-text-light text-byron-text h-12 w-full transition-all duration-100 ease-in-out border border-transparent ${inputClassNames}`
    return (
        <div className="relative shadow-xs rounded-lg mb-4">
            <div className="absolute pointer-events-none inset-y-0 left-0 pl-4 flex items-center">
                <SearchIcon className="pointer-events-none w-4 h-4 stroke-current" />
            </div>

            <input {...props} className={inputStyles} />
        </div>
    )
}
