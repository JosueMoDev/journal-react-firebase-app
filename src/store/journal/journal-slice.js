import { createSlice } from '@reduxjs/toolkit';
export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messageSaved: '',
        notes: [],
        activatedNote: null 
    },
    reducers: {
        savigNewNote: ( state ) => { 
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => { 
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote: (state, action) => { 
            state.activatedNote = action.payload;
            state.messageSaved = '';
        },
        setSavedNotes: (state, action ) => { 
            state.notes = action.payload
        },
        setSaving: (state) => { 
            state.isSaving = true;
            state.messageSaved = '';
        },
        updatedNote: (state, action ) => { 
            state.isSaving = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }
                return note
            });
            state.messageSaved = `${action.payload.title}, has been updated correctly`;
        },
        setNoteImagesGallery: (state, action) => {
            state.activatedNote.imagensURL = [...state.activatedNote.imagensURL, ...action.payload];
            state.isSaving = false;
        },
        clearJournalStateAtLogOut: ( state ) => { 
            state.isSaving = false;
            state.messageSaved = '';
            state.notes = [];
            state.activatedNote = null;
            
        },
        deleteNoteById: (state, action) => { 
            state.activatedNote = null;
            state.notes = state.notes.filter((note) => note.id !== action.payload);
        }
   }
});
export const {
    clearJournalStateAtLogOut,
    savigNewNote, addNewEmptyNote,
    setActiveNote, setSavedNotes,
    setNoteImagesGallery, deleteNoteById,
    setSaving, updatedNote
} = journalSlice.actions;