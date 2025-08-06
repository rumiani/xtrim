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

export function SelectLangs() {
    const { lang, setLanguage, isActive } = useSettingsStore();

    return (
        <Select
            disabled={!isActive}
            onValueChange={(value) => {
                const selectedLang = languages.find((lang) => lang.code === value);
                if (selectedLang) setLanguage(selectedLang)
            }}
        >
            <SelectTrigger className="w-fit pl-4! justify-center bg-gray-900! text-white rounded-xl">
                <SelectValue placeholder={lang.name || "Language"} className="text-white!" />
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
