import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { languages } from "./langs"
import useListStore from "@/stores/useListStore";
import useSettingStore from "@/stores/settingStore";

export function SelectLangs() {
    const { list } = useListStore();
    const { isActive, lang, setLang } = useSettingStore()

    const isTranslateOn: boolean | undefined = list.find((item) => item.value === "translate_button")?.status

    return (
        <Select
            disabled={!isTranslateOn}
            onValueChange={async (value) => {
                const selectedLang = languages.find((lang) => lang.code === value);
                if (selectedLang) setLang(selectedLang)

            }}
            value={lang.code}
        >
            <SelectTrigger
                className="relative group w-fit pl-4! justify-center bg-gray-900! text-white rounded-xl">
                {isActive && !isTranslateOn && <span className="absolute invisible -left-10 group-hover:visible">{"<-----"}</span>}
                <SelectValue className="text-white!" />
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
