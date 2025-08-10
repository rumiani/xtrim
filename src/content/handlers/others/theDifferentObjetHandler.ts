import { Feature } from "@/assets/lists/featuresList";

export const theDifferentObjetHandler: (newList: Feature[],
    oldList: Feature[]) => Feature | undefined = (newList: Feature[], oldList: Feature[]) => {
        let changedObject;
        oldList.forEach(oldObj => {
            const newObj = newList.find(newObj => newObj.value === oldObj.value)
            if (oldObj.status !== newObj?.status) return changedObject = newObj
        })
        return changedObject
    }