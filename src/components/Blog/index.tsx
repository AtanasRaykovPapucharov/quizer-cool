import SanityImage from '../SanityImage'
import YouTubeVideo from '../YouTubeVideo'
import { BlogType } from '../../types/BlogType'
 
const Blog: React.FC<BlogType> = ({ title, mainImage, description, paragraphs, publishedAt, links }) => {
    return (
        <article className='blog center'>
            <h1>{title}</h1>
            <h3>
                Публикувано на {new Date(publishedAt).toLocaleDateString()}
            </h3>
            <header className='container-resp-col'>
                <div className='flex-item-1'>
                    <SanityImage image={mainImage} alt={'blog post'} width={340} height={420} />
                </div>

                <div className='flex-item-1'>
                    {description.map((paragraph: any) => {
                        return <p  
                            key={paragraph._key}
                            className='blog-description'
                            style={{textAlign: 'justify'}}
                        >
                            {paragraph.children[0].text}
                        </p>
                    })}
                </div>
            </header>

            {/* {paragraphs.map((paragraph: any) => {
                return <div>
                    <p className='paragraph' key={paragraph._key}>
                        <SanityImage image={paragraph.image} alt={'blog post'} width={220} height={280} />
                        {paragraph.body[0].children[0].text}
                    </p>
                    <br />
                </div>
            })}
            
            {links.map((link: any) => {
                return <div>
                    <YouTubeVideo videoId={link.href} />
                </div>
            })} */}
        </article>
    )
}

export default Blog