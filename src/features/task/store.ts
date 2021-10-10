import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getbucketList, getbucketListDropdown, getTaskList, showTask } from './api'
import { BucketResponseListType, BucketResponseType, MetaResponseType, TaskResponseListType, TaskResponseType } from './type'

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        loading: false as boolean,
        meta: {} as MetaResponseType,
        page: 1 as number,
        buckets: [] as BucketResponseType[],
        bucket: {} as BucketResponseType,
        bucketList: [] as BucketResponseType[],
        tasks: [] as TaskResponseType[],
        task: {} as TaskResponseType
    },
    reducers:{
        setLoading: (state, action:PayloadAction<boolean>) => {
            state.loading = action.payload
        },
        setMeta: (state, action:PayloadAction<MetaResponseType>) => {
            state.meta = action.payload
        },
        setPage: (state, action:PayloadAction<number>) => {
            state.page = action.payload
        },
        setBuckets: (state, action:PayloadAction<BucketResponseType[]>) => {
            state.buckets = action.payload
        },
        setBucketList: (state, action:PayloadAction<BucketResponseType[]>) => {
            state.bucketList = action.payload
        },
        setTasks: (state, action:PayloadAction<TaskResponseType[]>) => {
            state.tasks = action.payload
        },
        setTask: (state, action:PayloadAction<TaskResponseType>) => {
            state.task = action.payload
        }
    }
})

export const {
    setLoading,
    setMeta,
    setPage,
    setBuckets,
    setTasks,
    setBucketList,
    setTask
} = TaskSlice.actions

export const loadBuckets = (page: number, records: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const respose: BucketResponseListType = await getbucketList(page, records)
    dispatch(setMeta(respose.meta))
    dispatch(setBuckets(respose.list))
    dispatch(setLoading(false))
}

export const loadBucketList = (sort?: string, order?: string) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const respose = await getbucketListDropdown(sort, order)
    dispatch(setBucketList(respose.items))
    dispatch(setLoading(false))
}

export const loadTasks = (page: number, records: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const response: TaskResponseListType = await getTaskList(page, records)
    dispatch(setMeta(response.meta))
    dispatch(setTasks(response.list))
    dispatch(setLoading(false))
}

export const loadTask = (id: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const response: TaskResponseType = await showTask(id)
    dispatch(setTask(response))
    dispatch(setLoading(false))
}

export const selectLoading = (state:any) => state.task.loading
export const selectMeta = (state:any) => state.task.meta
export const selectPage = (state:any) => state.task.page
export const selectBucketList = (state:any) => state.task.buckets
export const selectBucketListDropdown = (state:any) => state.task.bucketList
export const selectTaskList = (state:any) => state.task.tasks
export const selectTask = (state:any) => state.task.task

export default TaskSlice.reducer