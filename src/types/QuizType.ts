import { QuestionType } from "./QuestionType";

export type QuizType = {
    _id: string,
    title: string,
    titleBg: string,
    grade: number,
    minutes: number,
    imageUrl?: string,
    image?: any,
    description: string,
    overviewTitle?: string,
    overview?: any,
    questions: QuestionType[]
} 