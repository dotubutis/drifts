import MarkedInput from "./MarkedInput";
import MarkedPreview from "./MarkedPreview";
import { useState } from "react";
import { EyeIcon, CashIcon, DocumentTextIcon } from "@heroicons/react/outline";
import Heading from "../Heading";

const SPLIT = "SPLIT";
const EDIT = "EDIT";
const VIEW = "VIEW";

const Editor = () => {
  const [text, setText] = useState("# Lecture notes \n Syntax highlighting");
  const [editorMode, setEditorMode] = useState(EDIT);

  return (
    <>
      <div className="w-full h-1/12 flex justify-between">
        <Heading title={"Note"} Icon={DocumentTextIcon} />
        <div className="flex flex-row gap-x-2">
          {editorMode !== SPLIT && (
            <EyeIcon
              className={
                editorMode === VIEW
                  ? "h-8 w-8 cursor-pointer text-blue-500"
                  : "h-8 w-8 cursor-pointer"
              }
              onClick={() =>
                editorMode === EDIT ? setEditorMode(VIEW) : setEditorMode(EDIT)
              }
            />
          )}
          <CashIcon
            className={
              editorMode === SPLIT
                ? "h-8 w-8 cursor-pointer text-blue-500"
                : "h-8 w-8 cursor-pointer"
            }
            onClick={() =>
              editorMode !== SPLIT ? setEditorMode(SPLIT) : setEditorMode(EDIT)
            }
          />
        </div>
      </div>
      <section className="w-full h-4/5 flex flex-column">
        {editorMode === SPLIT && (
          <>
            <MarkedInput setText={setText} text={text} />
            <MarkedPreview text={text} />
          </>
        )}
        {editorMode === EDIT && (
          <>
            <MarkedInput setText={setText} text={text} />
          </>
        )}
        {editorMode === VIEW && (
          <>
            <MarkedPreview text={text} />
          </>
        )}
      </section>
    </>
  );
};

export default Editor;
