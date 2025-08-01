interface checkBoxProps {
  value: string;
  label: string,
  status: boolean;
  handleInputChange: Function;
}
export default function CheckboxInput({
  value,
  label,
  status,
  handleInputChange,
}: checkBoxProps) {
  return (
    <div className="rounded-lg transition-all duration-300">
      <div className="flex relative ">
        <input
          checked={status}
          onChange={() => handleInputChange()}
          type="checkbox"
          id={value}
          name={value}
          className={`cursor-pointer
relative peer shrink-0 flex justify-center align-middle
appearance-none w-5 h-5 border-2 border-gray-500 rounded-sm bg-white
mt-1 mx-0
checked:bg-blue-600 checked:border-0`}
        />
        <label htmlFor={value} className={`${status ? "text-black" : "text-gray-500"}  cursor-pointer pl-2 pt-1 text-base`}>
          {label}
        </label>
        <svg
          className="
        cursor-pointer
absolute 
w-4 h-4 mt-[6px] ml-[2px]
hidden peer-checked:block
pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    </div>
  );
}
