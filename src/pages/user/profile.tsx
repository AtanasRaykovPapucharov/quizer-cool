import { useRouter } from 'next/router'
import { CSSProperties, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import Results from '../../components/Results'
import { ResultType } from '../../types/ResultType'

export default function Profile() {
    const [username, setUsername] = useState<string | null>(null)
    const [results, setResults] = useState<ResultType[]>([])
    const router = useRouter()
    
    const [currentItems, setCurrentItems] = useState(null)
    const [pageCount, setPageCount] = useState(0)
    const [itemOffset, setItemOffset] = useState(0)
    const itemsPerPage = 3
    
    useEffect(() => {
        if(!window.localStorage.getItem('zita-user')) {
            // router.push('/user/login')
            setUsername("Гост")
        }
        else {
            const user = JSON.parse(window.localStorage.getItem('zita-user') || "Гост")
            setUsername(user.username)
        }

        if(window.localStorage.getItem('zita-user-results')) {
            const resultsString = window.localStorage.getItem('zita-user-results')
            let resultsArray = resultsString ? JSON.parse(resultsString) : []
            resultsArray = [...resultsArray].reverse()

            setResults(resultsArray)

            // Fetch items from another ritemsPerPageesources.
            const endOffset: number  = itemOffset  + itemsPerPage

            setCurrentItems(resultsArray.slice(itemOffset, endOffset))
            setPageCount(Math.ceil(resultsArray.length / itemsPerPage))
        }
    }, [itemOffset, itemsPerPage])

    // Invoke when user click to request another page.
    const handlePageClick = (e: any) => {
        const newOffset = (e.selected * itemsPerPage) % results.length

        setItemOffset(newOffset)
    }

    return (
        <div>
            {/* { username && <h2 className='center shadowed' > Профил на {username}</h2> } */}

            <h2 className='center'>Резултати</h2>
            <section className='paginator'>
                <Results results={currentItems} />
                <ReactPaginate
                    breakLabel='...'
                    previousLabel='&larr;' // <-
                    nextLabel='&rarr;' // ->
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    renderOnZeroPageCount={undefined}
                />
            </section>
        </div>
    )
}
