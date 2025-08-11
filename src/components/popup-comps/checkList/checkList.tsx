import useListStore from "@/stores/useListStore";
import { useMemo } from "react";
import { Feature } from "@/assets/lists/featuresList";
import { HideSection } from "./HideSection/HideSection";

export const CheckList = () => {
    const { list } = useListStore();
    const categorizedItems = useMemo(() => {
        const result = {
            tool: [] as Feature[],
            hideFeed: [] as Feature[],
            hideNotification: [] as Feature[],
            hideNavbar: [] as Feature[],
            hideMisc: [] as Feature[],
        };
        for (const item of list) {
            if (result[item.category]) result[item.category].push(item);
        }
        return result;
    }, [list]);

    return (
        <div className="h-72 custom-scrollbar">
            <HideSection categoryList={categorizedItems.tool} />
            <HideSection categoryList={categorizedItems.hideFeed} />
            <HideSection categoryList={categorizedItems.hideNotification} />
            <HideSection categoryList={categorizedItems.hideMisc} />
            <HideSection categoryList={categorizedItems.hideNavbar} />

        </div>
    )
}
