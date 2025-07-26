export async function translateToPersian(text: string): Promise<string> {
  try {
    const response = await fetch(
      `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=fa&dt=t&q=${encodeURIComponent(text)}`
    );

    if (!response.ok) throw new Error('Translation request failed');

    const data = await response.json();
    const translation = data[0].map((d: any) => d[0]).join('');
    return translation;
  } catch {
    return '❌ ترجمه نشد';
  }
}