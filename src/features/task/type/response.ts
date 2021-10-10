export type MetaResponseType = {
    total: number,
    page: number,
    per_page: number
}

export type BucketResponseType = {
    id: number,
    user_id: number,
    name: string,
    description: string,
    status: boolean,
    created_at: Date,
    updated_at: Date
}

export type BucketResponseListType = {
    list: BucketResponseType[],
    meta: MetaResponseType
}

export type TaskResponseType = {
    id: number,
    user_id: number,
    name: string,
    description: string,
    priority: number,
    sort: number,
    status: string,
    history: string[],
    deadline_at: Date,
    created_at: Date,
    updated_at: Date,
    bucket: BucketResponseType
}

export type TaskResponseListType = {
    list: TaskResponseType[],
    meta: MetaResponseType
}