import Link from 'next/link'
import SanityImage from '../SanityImage'

const Card = ({quiz: article}: any) => {
  const quizDescription = article.description ? article.description : ''
  
  const props = {
    image: article.image || article.mainImage,
    alt: article.title,
    width:280,
    height: 200
  }
  
  return (
    <article className='card animate__animated animate__pulse'>
      <Link href={`/quiz/${article._id}`}>
        <SanityImage {...props} />
        <h2 className='quiz-card'>
          {quizDescription}
        </h2>
      </Link>
    </article>
  )
}

export default Card
