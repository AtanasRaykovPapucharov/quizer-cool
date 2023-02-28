import Link from 'next/link'
import SanityImage from '../SanityImage'

const BlogCard: React.FC<any> = (blog) => {
  const props = {
    image: blog.image,
    alt: blog.title,
    width:280,
    height: 200
  }
  
  return (
    <article className='card card-blog animate__animated animate__pulse'>
      <Link href={`https://opoznai.bg/view/${blog.title}`}>
        <SanityImage {...props} />
        <h2 className='title-blog'>
          {blog.titleBg?.toUpperCase()}
        </h2>
      </Link>
    </article>
  )
}

export default BlogCard
