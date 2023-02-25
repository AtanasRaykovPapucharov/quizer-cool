import useAxios from 'axios-hooks'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'
import ERROR_404 from '../../components/404'
import Loading from '../../components/Loading'
import Quiz from '../../components/Quiz'

export default function QuizById() {
    const router = useRouter()
    const [{ data, loading, error }] = useAxios(`/api/quiz/${router.query.id}`)

    // useEffect(() => {
    //     if(!localStorage.getItem('zita-user')) {
    //         router.push('/user/login')
    //     }
    // }, [])
    
    if (loading) return <Loading />
    if (error) return <ERROR_404 />

    return (
        <Quiz {...data} />
    )
}
