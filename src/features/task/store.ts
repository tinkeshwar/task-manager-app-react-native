import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { getbucketList, getTaskList } from './api'
import { BucketResponseListType, BucketResponseType, MetaResponseType, TaskResponseListType, TaskResponseType } from './type'

export const TaskSlice = createSlice({
    name: 'task',
    initialState: {
        loading: false as boolean,
        meta: {} as MetaResponseType,
        page: 1 as number,
        buckets: [] as BucketResponseType[],
        tasks: [] as TaskResponseType[]
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
        setTasks: (state, action:PayloadAction<TaskResponseType[]>) => {
            state.tasks = action.payload
        },
    }
})

export const {
    setLoading,
    setMeta,
    setPage,
    setBuckets,
    setTasks
} = TaskSlice.actions

export const loadBuckets = (page: number, records: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const respose: BucketResponseListType = await getbucketList(page, records)
    dispatch(setMeta(respose.meta))
    dispatch(setBuckets(respose.list))
    dispatch(setLoading(false))
}

export const loadTasks = (page: number, records: number) => async (dispatch: any) => {
    dispatch(setLoading(true))
    const response: TaskResponseListType = await getTaskList(page, records)
    dispatch(setMeta(response.meta))
    dispatch(setTasks(response.list))
    dispatch(setLoading(false))
}

export const selectLoading = (state:any) => state.task.loading
export const selectMeta = (state:any) => state.task.meta
export const selectPage = (state:any) => state.task.page
export const selectBucketList = (state:any) => state.task.buckets
export const selectTaskList = (state:any) => state.task.tasks

export default TaskSlice.reducer