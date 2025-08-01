import React from "react";
import { translateToPersian } from "../handlers/translateToPersian";

export const TranslateButton:React.FC<{ text: string }> = ({ text }: { text: string }) => {
    const [translating, setTranslating] = React.useState(false);
    const [result, setResult] =React.useState<string | null>(null);

    const handleTranslate = async () => {
        setTranslating(true);
        setResult(null);
        const result = await translateToPersian(text);
        setResult(result);
        setTranslating(false);
    };

    return (
        <div dir='rtl' className="mt-2 text-right" >
            <button
                onClick={handleTranslate}
                className="w-16! px-3! py-1! text-sm! bg-gray-100! text-blue-500! rounded-full! hover:bg-gray-200!">
                {translating ? '...' : 'ترجمه'}
            </button>
            {
                result && (
                    <div className="mt-1 text-sm text-gray-300 italic text-rtl" > {result} </div>
                )}
        </div>
    );
};