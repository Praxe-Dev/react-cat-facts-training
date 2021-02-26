interface Status {
    sentCount: number,
    verified: boolean
}

export interface Fact {
    __v: number,
    _id: string,
    createdAt: string,
    deleted: boolean,
    source: string,
    status: Status,
    text: string,
    type: string,
    updatedAt: string,
    used: boolean,
    user: string
}