import { ResultType } from "../../types/ResultType"
import ResultCard from "../ResultCard"

const Results = ({ results }: any) => {
  return(
    <>
      { 
          results && results.length !== 0 ? 
          results.map((res: ResultType, i: number) => <ResultCard key={i} {...res} />) :
          <h2 className='center'>Няма намерени резултати</h2> 
      }
    </>
  )
}

export default Results