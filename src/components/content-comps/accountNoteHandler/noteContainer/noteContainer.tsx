export const CUSTOM_DIV_ID = 'noteContainer';

export const NoteContainer = () => {
  return (
    <div
      id={CUSTOM_DIV_ID}
      className="block bg-red-500 text-white p-2 text-center font-semibold"
    >
      My Custom One-Liner in react
    </div>
  );
};
