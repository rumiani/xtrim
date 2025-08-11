"use client"
import { useEffect, useRef, useState } from "react";
import { getUserFromStorage, saveUserNoteToStorage } from "./localStorageHandler";
import { RiEditLine, RiSaveLine } from "react-icons/ri";
import { getXProfileUsernameFromURL } from "@/content/handlers/getUserInfo/getXProfileUsernameFromURL";

export default function NoteContainer() {
  const [username, setUsername] = useState<string>();
  const [note, setNote] = useState<string>("");
  const [editing, setEditing] = useState<boolean>(false);
  const [saved, setSaved] = useState<boolean>(true);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const foundUsername = getXProfileUsernameFromURL()
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
        autoResize();
      }
    }, 0);
  };

  const handleChange = () => {
    setNote(textareaRef.current!.value);
    autoResize();
  };

  const autoResize = () => {
    textareaRef.current!.style.height = 'auto'; // reset
    textareaRef.current!.style.height = `${textareaRef.current!.scrollHeight}px`; // adjust
  };
  return (
    <div className="relative w-full flex flex-row gap-2 min-h-10">
      <textarea
        ref={textareaRef}
        readOnly={!editing}
        value={note}
        placeholder="Write something about this account ..."
        onChange={handleChange}
        className={`${editing ? "bg-yellow-200" : ""} profileTextArea w-full min-h-[2.5rem] overflow-hidden text-black! outline-none`}
        dir="auto"
        style={{
          lineHeight: '1.5rem',
          resize: "none",
          cursor: editing ? "text" : "default",

        }}
      />
      <button className="absolute w-12 right-0 top-0">
        {editing ? (
          <RiSaveLine onClick={saveNoteHandler} title="Save" className="text-2xl w-full text-gray-500 flex justify-center items-center" />
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
