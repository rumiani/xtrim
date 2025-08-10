import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    // SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { languages } from "./langs"
import useSettingsStore from "@/stores/useSettingsStore";
import useListStore from "@/stores/useListStore";

export function SelectLangs() {
    const { lang, setLanguage, isActive } = useSettingsStore();
    const { list } = useListStore();
    const isTranslateOn: boolean | undefined = list.find((item) => item.value === "translate_button")?.status


    return (
        <Select
            disabled={!isTranslateOn}
            onValueChange={(value) => {
                const selectedLang = languages.find((lang) => lang.code === value);
                if (selectedLang) setLanguage(selectedLang)
            }}
        >
            <SelectTrigger
            className="relative group w-fit pl-4! justify-center bg-gray-900! text-white rounded-xl">
            {isActive && !isTranslateOn && <span className="absolute invisible -left-10 group-hover:visible">{"<-----"}</span>}
                <SelectValue placeholder={lang.name} defaultValue={lang.code} className="text-white!" />
            </SelectTrigger>
            <SelectContent className="w-48 bg-gray-900!">
                <SelectGroup>
                    {languages.map((lang: { code: string, name: string }) => {
                        return <SelectItem key={lang.name} value={lang.code}
                            className="cursor-pointer hover:bg-gray-700 text-white"
                        >{lang.name}</SelectItem>
                    })}
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
