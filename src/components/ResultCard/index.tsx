import { ResultType } from "../../types/ResultType"

const ResultCard: React.FC<ResultType> = ({
    _id,
    title,
    grade,
    description,
    date,
    correctAnswersCount,
    percents
}) => {

  const dateTime = new Date(date).toLocaleString().split(', ')
  const questionsCount = +description?.split(' ')[0]
  
  return (
    <article className='card card-result animate__animated animate__pulse'>
      {
        <div className="content-wrapper">
          <h2 style={{marginTop: '0px'}}>{`${title}`} <br /> {`${grade} клас`}</h2>
          <h4>
            {'Дата: '} {dateTime[0]}
            <br />
            {'Час: '} {dateTime[1]}
          </h4>
          <h3>{description}</h3>
          <h3>
            {'Брой верни отговори: '}{correctAnswersCount}
            <br />
            {'В проценти: '}{Math.round(correctAnswersCount*100/questionsCount)}{' %'}
          </h3>
        </div>
      }
    </article>
  )
}

export default ResultCard
