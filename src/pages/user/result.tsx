import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ResultCard from '../../components/ResultCard'

export default function Result() {
    const[result, setResult] = useState<any>(null)
    const router = useRouter()

    useEffect(() => {
        let res = window.sessionStorage.getItem('result')

        if(typeof(res) == 'string') res = JSON.parse(res)
        if(res) setResult(res)

        setTimeout(() => router.push('/user/profile'), 5000)
    }, [])

    return (
        <div className='center'>
            <ResultCard {...result} />
        </div>
    )
}
