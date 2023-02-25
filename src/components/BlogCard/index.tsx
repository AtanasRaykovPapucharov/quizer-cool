import Link from 'next/link'
import SanityImage from '../SanityImage'
import { LinkStyles, TitleStyles } from './styles'

const BlogCard: React.FC<any> = (blog) => {
  const props = {
    image: blog.image,
    alt: blog.title,
    width: 220,
    height: 150
  }
  
  return (
      <Link 
        className='card card-blog animate__animated animate__bounceIn' 
        href={`https://opoznai.bg/view/${blog.title}`}
        style={LinkStyles}
      >
        <article>
          <SanityImage {...props} />
          <h4 style={TitleStyles}>{blog.titleBg?.toUpperCase()}</h4>
        </article>
      </Link>
  )
}

export default BlogCard
