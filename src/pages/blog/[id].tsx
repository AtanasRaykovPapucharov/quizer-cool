import useAxios from 'axios-hooks'
import { useRouter } from 'next/router'
import Blog from '../../components/Blog'

import Loading from '../../components/Loading'

export default function CategoryById() {
    const router = useRouter()
    const [{ data, loading, error }] = useAxios(`/api/blog/post/${router.query.id}`)

    if (loading) return <Loading />
    if (error) return <div>ERROR</div>

    console.log(data)

    const blogData = {
        title: data.titleBg,
        mainImage: data.image,
        description: data.description,
        paragraphs: data.paragraphs,
        links: data.links,
        publishedAt: new Date(data.publishedAt)
    }

    return (
        <Blog {...blogData} />
    )
}
