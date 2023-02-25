export function sortByDate(data: []): [] {
    return data.sort((a: any, b: any) => Number(new Date(a._createdAt)) - Number(new Date(b._createdAt)))
}

export function sortByNumber(data: [], prop: string): [] {
    return data.sort((a: any, b: any) => a[prop] - b[prop])
}

export function sortByAlphabet(data: []): [] {
    return data.sort((a: any, b: any) => a.titleBg[0].localeCompare(b.titleBg[0]))
}
