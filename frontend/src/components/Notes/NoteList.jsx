import NoteListItem from "./NoteListItem";
import Heading from "../Heading";
import { NewspaperIcon } from "@heroicons/react/outline";

const NoteList = () => {
  return (
    <>
      <Heading title={"Notes"} Icon={NewspaperIcon} />
      <NoteListItem title={"Note Title 1"} />
      <NoteListItem title={"Note Title 2"} />
      <NoteListItem title={"Note Title 3"} />
    </>
  );
};

export default NoteList;
