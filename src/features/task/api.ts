import RestApiService from "../../services/RestApiService"

export const getbucketList = (page: number, records: number) => {
    const url = `task/buckets?page=${page}&records=${records}`
    return RestApiService.get(url)
}

export const createBucket = (data: any) => {
    const url = `task/buckets`
    return RestApiService.post(url, data)
}

export const getTaskList = (page: number, records: number) => {
    const url = `task/tasks?page=${page}&records=${records}`
    return RestApiService.get(url)
}

export const createTask = (data: any) => {
    const url = `task/tasks`
    return RestApiService.post(url, data)
}