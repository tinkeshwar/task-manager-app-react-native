import { prioritiesData } from "../data";
import { BucketResponseType } from "../type";

export const getBucketDropdown = (buckets: BucketResponseType[]) => {
    return buckets.map((bucket: BucketResponseType)=>{
        return {
            value: bucket.id,
            label: bucket.name
        }
    })
}

export const getPriorityByValue = (value: number) => {
    return prioritiesData.find(priority=> priority.value === value)
}

export const getPriorityItemByValue = (value: number, type: 'value'|'label'|'color') => {
    const priority =  prioritiesData.find(priority=> priority.value === value)
    if(type === 'value'){
        return priority?.value
    }
    if(type === 'label'){
        return priority?.label
    }
    if(type === 'color'){
        return priority?.color
    }
    return 'NA'
}

export const parseHistory = (history: string) => {
    return JSON.parse(history)
}