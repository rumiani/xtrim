import React from "react";
import useSettingsStore from "@/stores/useSettingsStore";
import { MdOutlineTranslate } from "react-icons/md";
import { googleTranslateHandler } from "../handlers/googleTranslateHandler";

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
        const result = await googleTranslateHandler(text, lang.code);
        setResult(result);
        setTranslating(false);
    };

    return (
        <div dir='rtl' className="mt-2 text-right" >
            <div className="flex flex-row">
                <button
                    onClick={handleTranslate}
                    className="w-10 h-10 rounded-full bg-gray-400 hover:bg-gray-900!">
                    {translating ? <p className="text-lg text-center">...</p> : <MdOutlineTranslate className="text-lg mx-auto" />}
                </button>
            </div>
            {
                result && (
                    <div dir={dir} className={`${dir === "ltr" ? "text-left" : "text-right"} mt-1 text-sm text-gray-300 italic`} > {result} </div>
                )}
        </div>
    );
};