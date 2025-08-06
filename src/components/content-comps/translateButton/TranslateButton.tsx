import React from "react";
import { translateToPersian } from "../handlers/translateToPersian";
import { SelectLangs } from "./langsSelect/langsSelect";
import useSettingsStore from "@/stores/useSettingsStore";

export const TranslateButton: React.FC<{ text: string }> = ({ text }: { text: string }) => {
    const { lang } = useSettingsStore();
    const [translating, setTranslating] = React.useState(false);
    const [result, setResult] = React.useState<string | null>(null);
    const [dir, setDir] = React.useState<string>();


    const handleTranslate = async () => {
        const dirResult = ['fa', 'ar', 'he', 'ur'].includes(lang.code) ? 'rtl' : 'ltr';
        setDir(dirResult)
        setTranslating(true);
        setResult(null);
        const result = await translateToPersian(text, lang.code);
        setResult(result);
        setTranslating(false);
    };

    return (
        <div dir='rtl' className="mt-2 text-right" >
            <div className="flex flex-row">
                <button
                    onClick={handleTranslate}
                    className="w-16! px-3! py-1! text-sm! bg-gray-900! text-blue-500 rounded-r-3xl! hover:bg-gray-900!">
                    {translating ? '...' : 'ترجمه'}
                </button>
                <SelectLangs />
            </div>
            {
                result && (
                    <div dir={dir} className={`${dir === "ltr" ? "text-left" : "text-right"} mt-1 text-sm text-gray-300 italic`} > {result} </div>
                )}
        </div>
    );
};