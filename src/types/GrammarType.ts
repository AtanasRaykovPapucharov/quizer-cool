export enum GrammarTypes {
    CHOOSE = 'choose',
    DRAG_AND_DROP = 'drag and drop',
    EDIT = 'edit'
}

export type GrammarType = {
    _id: string,
    title: string,
    description: string,
    type: GrammarTypes,
    dropsList?: string[],
    choosingList?: string[],
    wrongParagraph: string[],
    rightParagraph: string[]
}