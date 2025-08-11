import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { handleSwitchChange } from "../handelSwitchChange";
import { Feature } from "@/assets/lists/featuresList";
// import { useEffect, useState } from "react";
// import { SettingsTypes } from "@/assets/lists/settings";
// import { chromStorageHandler } from "@/handlers/chromStorageHandler";
import useSettingStore from "@/stores/settingStore";

export default function SwitchInput({ item }: { item: Feature }) {
  const { value, status, label } = item;
  const { isActive } = useSettingStore.getState()


  return (
    <div className={`flex flex-col gap-2 relative ${value !== "isActive" && !isActive && 'opacity-50'} rounded-lg transition-all duration-300`}>
      <div className="flex items-center gap-2 my-1">
        <Switch
          checked={status}
          onClick={() => handleSwitchChange({ ...item, status: !status })}
          id={value}
          name={value}
          disabled={value === "isActive" ? false : !isActive}
          className="relative border-none cursor-pointer rounded-full shadow-[0_1px_10px] shadow-gray-500 outline-none focus:shadow-[0_0_0_2px] focus:shadow-red data-[state=checked]:bg-blue-500"
        />

        <Label htmlFor={value}
          className={`w-fit ${status ? "text-white" : "text-gray-500"} ${value !== "isActive" && !isActive ? 'text-gray-400 cursor-not-allowed' : 'cursor-pointer'} pl-2 pt-1 text-base pr-[15px] text-[15px] leading-none`}
        >
          {label}
        </Label>
      </div>
    </div>
  );
}
