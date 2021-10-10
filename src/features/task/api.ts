import RestApiService from "../../services/RestApiService"

export const getbucketList = (page: number, records: number) => {
    const url = `task/buckets?page=${page}&records=${records}`
    return RestApiService.get(url)
}

export const getbucketListDropdown = (sort?: string, order?: string) => {
    const url = `task/buckets/dropdown?sort=${sort}&order=${order}`
    return RestApiService.get(url)
}

export const createBucket = (data: any) => {
    const url = `task/buckets`
    return RestApiService.post(url, data)
}

export const getTaskList = (page: number, records: number) => {
    const url = `task/tasks?page=${page}&records=${records}&sort=priority&order=DESC`
    return RestApiService.get(url)
}

export const showTask = (id: number) => {
    const url = `task/tasks/${id}`
    return RestApiService.get(url)
}

export const createTask = (data: any) => {
    const url = `task/tasks`
    return RestApiService.post(url, data)
}

export const updateTask = (id:number, data: any) => {
    const url = `task/tasks/${id}`
    return RestApiService.put(url, data)
}

export const patchTask = (id: number) => {
    const url = `task/tasks/${id}`
    return RestApiService.patch(url)
}