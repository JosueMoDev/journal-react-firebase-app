import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import { addNewEmptyNote, savigNewNote, setActiveNote,  setSavedNotes, setSaving, updatedNote } from "./journal-slice";

export const startNewNote  = () => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        dispatch(savigNewNote());
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }
        const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
        const resp = await setDoc(newDoc, newNote);
        
        newNote.id = newDoc.id;

        // dispatch
        
        dispatch(addNewEmptyNote(newNote));
        dispatch(setActiveNote(newNote));
    }
}

export const startLoadingNotes = () => { 
    return async (dispatch, getState) => { 
        const { uid } = getState().auth;
        if (!uid) throw Error('user not exist');
        const notes = await loadNotes(uid);

        dispatch(setSavedNotes(notes));
    }
}

export const startSavingNote = () => { 
    return async (dispatch, getState) => { 
        dispatch(setSaving());

        const { uid } = getState().auth;
        const { activatedNote } = getState().journal;
        const noteToFireStore = { ...activatedNote };
        delete noteToFireStore.id;
        const docRef = doc(FirebaseDB, `${uid}/journal/notes/${activatedNote.id}`);
        await setDoc(docRef, noteToFireStore, { merge: true });
         
        dispatch(updatedNote( activatedNote ))
    }
}
