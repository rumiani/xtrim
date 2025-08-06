"use client"
import { useEffect, useRef, useState } from "react";
import { getUserFromStorage, saveUserNoteToStorage } from "./localStorageHandler";
import { getXProfileUsername } from "@/content/handlers/getUserInfo/getXProfileUsername";
import { RiEditLine, RiSaveLine } from "react-icons/ri";

export default function NoteContainer() {
  const [username, setUsername] = useState<string>();
  const [note, setNote] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const foundUsername = getXProfileUsername()
    console.log(foundUsername);
    if (foundUsername) {
      setUsername(foundUsername);
      const userObject = getUserFromStorage(foundUsername);
      if (userObject) setNote(userObject.note);
    }

  }, []);

  const saveNoteHandler = () => {
    if (username) {
      setSaved(false);
      setEditing(false);
      saveUserNoteToStorage({ username, note });
      setTimeout(() => setSaved(true), 2000);
    }
  };

  const editNoteHandler = () => {
    setEditing(true);
    setTimeout(() => {
      if (textareaRef.current) {
        textareaRef.current.focus();
        autoResize(textareaRef.current);
      }
    }, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNote(e.target.value);
    autoResize(e.target);
  };

  const autoResize = (textarea: HTMLTextAreaElement) => {
    textarea.style.height = 'auto'; // reset
    textarea.style.height = `${textarea.scrollHeight}px`; // adjust
  };

  return (
    <div className="relative w-full flex flex-row gap-2 min-h-10">
      <textarea
        ref={textareaRef}
        readOnly={!editing}
        value={note}
        placeholder="Write something about this account ..."
        onChange={handleChange}
        className={`${editing ? "bg-yellow-200" : ""} profileTextArea w-full min-h-[2.5rem] overflow-hidden text-black! p-1 outline-none`}
        dir="auto"
        rows={2}
        style={{
          lineHeight: '1.5rem',
          resize: "none",
          cursor: editing ? "text" : "default",
          
        }}
      />
      <button className="absolute w-12 right-0 -top-7">
        {editing ? (
          <RiSaveLine onClick={saveNoteHandler} title="Save" className="text-2xl w-full text-gray-500 flex justify-center items-center"/>
        ) : saved ? (
          <RiEditLine
            onClick={editNoteHandler} title="Edit" className="text-2xl w-full text-yellow-400 flex justify-center items-center"
          />
      ) : (
      <span className="w-full text-green-500 flex justify-center items-center">Saved</span>
        )}
    </button>
    </div >
  );
}
