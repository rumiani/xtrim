import { FeatureListTypes } from "@/assets/lists/featuresList";

export const theDifferentObjetHandler: (newList: FeatureListTypes[],
    oldList: FeatureListTypes[]) => FeatureListTypes | undefined = (newList: FeatureListTypes[], oldList: FeatureListTypes[]) => {
        let changedObject;
        oldList.forEach(oldObj => {
            const newObj = newList.find(newObj => newObj.value === oldObj.value)
            if (oldObj.status !== newObj?.status) return changedObject = newObj
        })
        return changedObject
    }