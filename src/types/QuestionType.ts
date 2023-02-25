import { AnswerType } from "./AnswerType"

export type QuestionType = {
    _id: string,
    title: string,
    order: number,
    text: string,
    imageUrl?: string,
    image?: any,
    imageWidth: number,
    imageHeight?: number,
    answers: AnswerType[]
}