import { useEffect, useMemo } from 'react'
import { useForm } from '../../hooks' 
import { SaveOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ImageGallery } from '../components'
import { setActiveNote, startSavingNote } from '../../store/journal'
export const NoteView = () => {
    const dispatch = useDispatch();
    const { activatedNote } = useSelector(state => state.journal);
    const { body, title, date,  onInputChange, formState } = useForm(activatedNote);
    const dataString = useMemo(() => { 
        const newDate = new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"});
        return newDate;
    }, [date])
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState])
    
    const onSaveNote = () => { 
        dispatch(startSavingNote());
    }
    return (
      <Grid
          container
          direction='row'
          justifyContent='space-between'
          sx={{mt:5}}  
      >
        <Grid item>
              <Typography fontSize={39} fontWeight='light'>{ dataString }</Typography>      
        </Grid> 
        <Grid item>
                <Button color='primary' sx={{ padding: 2 }} onClick={ onSaveNote }>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save  
            </Button>      
        </Grid>  
        <Grid container>
            <TextField
                type='text'
                variant='filled'
                fullWidth
                placeholder='Enter a title'
                label='title'
                sx={{border:'none', mb:1}}
                name='title'
                value={title}
                onChange ={onInputChange}
                  
            />
            <TextField
                type='text'
                variant='filled'
                fullWidth
                multiline  
                placeholder="What's happened today?"
                minRows={5} 
                name='body'
                value={body}
                onChange={onInputChange} 
            />    
        </Grid>  
        <ImageGallery/>  
    </Grid>
  )
}
