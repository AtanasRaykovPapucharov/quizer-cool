import { useRouter } from 'next/router'
import { CSSProperties, useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts'
import Results from '../../components/Results'
import { ResultType } from '../../types/ResultType'

export default function Profile() {
    const [barData, setBarData] = useState<any[]>([])
    const [username, setUsername] = useState<string | null>(null)
    const [results, setResults] = useState<ResultType[]>([])
    const router = useRouter()
    
    const [currentItems, setCurrentItems] = useState([])
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

            // bar charts
            if(resultsArray.length > 1) {
                let bars = [...barData];

                if(resultsArray.length > 10) {
                    resultsArray = resultsArray.slice(resultsArray.length - 10, resultsArray.length)
                }

                resultsArray.forEach((res: any) => {
                    let all = +res.description?.split(' ')[0]
                    bars.push({
                        "title": `${res.title} - ${res.grade} клас`,
                        "Верни отговори [%]": Math.round(res.correctAnswersCount*100/all),
                        "Верни отговори [брой]": res.correctAnswersCount,
                        "Въпроси [брой]": all
                    })
                });

                setBarData(bars)
            }

            //----------------------------
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

            <h2 className='center'>РЕЗУЛТАТИ</h2>

            {
                currentItems.length > 1 &&
                <>
                    <h3 className='center'>Разпределение на резултатите</h3>
                    <div className='container-resp-col' style={{marginLeft: "-10px"}}>
                        <div className='center flex-item-1'> 
                            <BarChart width={360} height={280} data={barData}>
                                <CartesianGrid stroke="rgb(73, 104, 142)" strokeDasharray="3 3" />
                                <XAxis dataKey="title" />
                                <YAxis />
                                <Tooltip />
                                <ReferenceLine y={60} stroke="green" />
                                <Legend />
                                <Bar dataKey="Въпроси [брой]" fill="rgb(34,145,206)" />
                                <Bar dataKey="Верни отговори [брой]" fill="rgb(244, 162, 50)" />
                            </BarChart>
                        </div>  
                                
                        <div className='center flex-item-1'> 
                            <BarChart width={360} height={280} data={barData}>
                                <CartesianGrid stroke="rgb(73, 104, 142)" strokeDasharray="3 3" />
                                <XAxis dataKey="title" />
                                <YAxis />
                                <Tooltip />
                                <ReferenceLine y={100} stroke="green" />
                                <Legend />
                                <Bar dataKey="Верни отговори [%]" fill="rgb(73, 104, 142)" />
                            </BarChart>
                        </div> 

                    </div> 
                </> 
            }

            <br />
            <hr />

            <section className='paginator'>
                <h3 className='center'>Всички резултати</h3>
                <br />
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
