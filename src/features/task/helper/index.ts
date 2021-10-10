import { BucketResponseType } from "../type";

export const getBucketDropdown = (buckets: BucketResponseType[]) => {
    return buckets.map((bucket: BucketResponseType)=>{
        return {
            value: bucket.id,
            label: bucket.name
        }
    })
}