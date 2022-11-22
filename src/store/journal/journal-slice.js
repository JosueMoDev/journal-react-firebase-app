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
        },
        setSavedNotes: (state, action ) => { 
            state.notes = action.payload
        },
        setSaving: (state) => { 
            state.isSaving = true;
        },
        updatedNote: (state, action ) => { 
            state.isSaving = false;
            state.notes = state.notes.map(note => { 
                if (note.id === action.payload.id) { 
                    return action.payload;
                }
                return note
            })
        },
        deleteNoteById: ( state, action ) => { 

        }
   }
});
export const { savigNewNote, addNewEmptyNote, setActiveNote, setSavedNotes, setSaving, updatedNote, deleteNoteById } = journalSlice.actions;