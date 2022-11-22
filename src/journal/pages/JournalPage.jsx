import {  IconButton } from '@mui/material'
import { JournalLayout } from '../layout/JournalLayout'
import { NothingSelectedView, NoteView } from '../views';
import { AddOutlined } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux';
import { startNewNote } from '../../store/journal';

export const JournalPage = () => {
  const dispatch = useDispatch();
  const { isSaving, activatedNote } = useSelector(state => state.journal);
  const onClickNewNote = () => { 
    dispatch(startNewNote());
  }
  
  return (
    <JournalLayout >

      {(!!activatedNote) ? <NoteView /> : < NothingSelectedView />}
      <IconButton
        disabled={ isSaving }
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
        onClick={ onClickNewNote }
      >
        <AddOutlined/>
      </IconButton>
    </JournalLayout>
  )
}
