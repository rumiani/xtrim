export async function googleTranslateHandler(text: string, lang: string): Promise<string> {
  const googleTranslateAPI = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${lang}&dt=t&q=${encodeURIComponent(text)}`
  try {
    const response = await fetch(googleTranslateAPI);
    if (!response.ok) throw new Error('Translation request failed');
    const data = await response.json();
    const translation = data[0].map((d: any) => d[0]).join('');
    return translation;
  } catch {
    return 'Oops! Something went wrong(Please check your connection).';
  }
}