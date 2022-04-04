import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export default function useApplicationData() {
  const [notebooks, setNotebooks] = useState([]);
  const [selectedNotebookId, setSelectedNotebookId] = useState(null);
  const [selectedNote, setSelectedNote] = useState({ id: null });
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const userIdFromCookie = Number(Cookies.get("id"));
    if (userIdFromCookie) {
      setUserId(userIdFromCookie);
    }

    const fetchNotebookData = async () => {
      try {
        if (userId) {
          const response = await axios({
            url: "/notebooks",
            method: "get",
            params: { userId: userId },
          });
          if (response) {
            const notebooksData = response.data.notebooks;
            setNotebooks(notebooksData);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetchNotebookData();
  }, [userId]);

  const fetchNote = async (noteId) => {
    try {
      const response = await axios({
        url: "/notes",
        method: "get",
        params: { id: noteId },
      });
      if (response && response.data.notes[0].length !== 0) {
        setSelectedNote(response.data.notes[0]);
      }
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  };

  const saveNote = async (noteId, editorText) => {
    console.log("saveNote");
    // try {
    //   const response = await axios({
    //     url: "/notes/" + noteId,
    //     method: "put",
    //     params: { id: noteId, content: editorText },
    //   });
    //   if (response.status >= 200 && response.status < 300) {
    //     setSelectedNote((prev) => {
    //       return { ...prev, content: editorText };
    //     });
    //   }
    //   return true;
    // } catch (error) {
    //   console.log(error);
    //   return false;
    // }
  };

  const addNote = async (userId, name) => {
    console.log("addNote");
    // try {
    //   const res = await axios({
    //     url: "/notes",
    //     method: "post",
    //     params: { id: userId, title: name },
    //   });
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const editNote = async (noteId, title) => {
    console.log("editNote");
    // try {
    //   const res = await axios({
    //     url: "/notes/" + noteId,
    //     method: "put",
    //     params: { id: noteId, title: title },
    //   });
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const deleteNote = async (currentNoteId) => {
    console.log("deleteNote");
    // try {
    //   const res = await axios({
    //     url: "/notes/" + currentNoteId,
    //     method: "delete",
    //     params: { id: currentNoteId },
    //   });
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const addNotebook = async (userId, name) => {
    console.log("addNotebook");
    // try {
    //   const res = await axios({
    //     url: "/notebooks",
    //     method: "post",
    //     params: { id: userId, name },
    //   });
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const editNotebook = async (notebookId, book) => {
    console.log("editNotebook");
    // try {
    //   const res = await axios({
    //     url: "/notebooks/" + notebookId,
    //     method: "put",
    //     params: { id: notebookId, book: book },
    //   });
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const deleteNotebook = async (currentNotebookId) => {
    console.log("deleteNotebook");
    // try {
    //   const res = await axios({
    //     url: "/notebooks/" + currentNotebookId,
    //     method: "delete",
    //     params: { id: currentNotebookId },
    //   });
    //   setState((prev) => ({
    //     ...prev,
    //     currentNotebookId: null,
    //   }));
    //   // refreshData(state.userId);
    //   return res.data;
    // } catch (error) {
    //   return error.response;
    // }
  };

  const logOut = () => {
    Cookies.remove("id", { path: "" });
    // refreshData(state.userId);
  };

  return {
    notebooks,
    fetchNote,
    logOut,
    userId,
    selectedNotebookId,
    setSelectedNotebookId,
    selectedNote,
    setSelectedNote,
    saveNote,
    addNote,
    editNote,
    deleteNote,
    addNotebook,
    editNotebook,
    deleteNotebook,
  };
}
