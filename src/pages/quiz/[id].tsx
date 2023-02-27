import { useRouter } from "next/router"
import useAxios from "axios-hooks"
import Loading from "../../components/Loading"
import ERROR_404 from "../../components/404"
import Quiz from "../../components/Quiz"

export default function QuizById() {
    const router = useRouter()
    const [{ data, loading, error }] = useAxios(`/api/quiz/${router.query.id}`)
    
    if (loading) return <Loading />
    if (error) return <ERROR_404 />

    return ( <Quiz {...data} /> )
}
