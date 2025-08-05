import useActivationStore from "@/stores/useActivationStore";

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
  const { isActive } = useActivationStore();
  return (
    <div className="rounded-lg transition-all duration-300">
      <div className={`flex relative ${value !== "isActive" && !isActive && 'opacity-50'}`}>
        <input
          checked={status}
          onChange={() => handleInputChange()}
          type="checkbox"
          id={value}
          name={value}
          disabled={value === "isActive" ? false : !isActive}
          className={`
relative peer shrink-0 flex justify-center align-middle
appearance-none w-5 h-5 border-2 border-gray-500 rounded-sm bg-white
mt-1 mx-0
checked:bg-blue-600 checked:border-0 ${value !== "isActive" && !isActive ? 'cursor-not-allowed' : 'cursor-pointer'}`}
        />
        <label htmlFor={value} className={`w-fit ${status ? "text-black" : "text-gray-600"} ${value !== "isActive" && !isActive ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'}   pl-2 pt-1 text-base`}>
          {label}
        </label>
        <svg
          className="
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
