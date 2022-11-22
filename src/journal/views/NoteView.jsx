import { useEffect, useMemo, useRef } from 'react'
import { useForm } from '../../hooks' 
import { DeleteOutline, SaveOutlined, UploadFileOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { ImageGallery } from '../components'
import { setActiveNote, startDeletingNote, startSavingNote, startUploadingFiles } from '../../store/journal'
import Swal from 'sweetalert2'
// import 'sweetalert2/dist/sweetalert2.css'
export const NoteView = () => {
    const dispatch = useDispatch();
    const { activatedNote, messageSaved, isSaving } = useSelector(state => state.journal);
    
    const { body, title, date,  onInputChange, formState } = useForm(activatedNote);
    const dataString = useMemo(() => { 
        const newDate = new Date(date).toLocaleDateString('en-us', { weekday: "long", year: "numeric", month: "short", day: "numeric"});
        return newDate;
    }, [date])
    useEffect(() => {
        dispatch(setActiveNote(formState));
    }, [formState]);
    const fileInputRef = useRef();
    useEffect(() => {
        if (messageSaved.length > 0) {
            Swal.fire({
                title: 'Success!',
                text:'Note has been updated',
                icon: 'success',
                timer: 3000,
                showConfirmButton: false,
            })
        }
    }, [messageSaved])
    
    
    const onSaveNote = () => { 
        dispatch(startSavingNote());
    }

    const onUploadFiles = ({ target }) => { 
        if (target.files === 0) return;
        dispatch(startUploadingFiles(target.files));
    } 

    const onDelete = () => { 
        dispatch(startDeletingNote());
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
            <IconButton color='primary' onClick={() => fileInputRef.current.click()} disabled={ isSaving }>
                <UploadFileOutlined sx={{ fontSize: 30 }} />
            </IconButton>      
            <Button color='primary' sx={{ padding: 2 }} onClick={ onSaveNote } disabled={ isSaving }>
                <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                Save  
            </Button> 
            <IconButton 
            onClick={ onDelete }
            color='error'
            >
               <DeleteOutline sx={{ fontSize: 30 }} /> 
            </IconButton>     
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
            <input 
                sx={{ marginTop:4}}
                type='file'
                multiple
                onChange={ onUploadFiles }
                style={{display:'none'}}
                ref ={fileInputRef}
            />    
        </Grid> 
        
        <ImageGallery { ...activatedNote } />  
    </Grid>
  )
}
