import { TurnedInNot } from '@mui/icons-material'
import { Grid, ListItem, ListItemIcon, ListItemText, ListItemButton} from '@mui/material'
import { useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../../store/journal'

export const SideBarItem = ({ note }) => {
    const { title, body, id, date,  imagensURL=[] } = note
    const dispatch = useDispatch();
    const onListItemButtonClick = () => {
        dispatch(setActiveNote({ id, title, body, date, imagensURL }));
    }
    const newBody = useMemo(() => {
        return (body.length > 17) ? body.substring(0, 17) + '...' : body;
    },[body])    
    return (
    <ListItem  disablePadding>
        <ListItemButton onClick={ onListItemButtonClick}>
            <ListItemIcon>
                <TurnedInNot />
            </ListItemIcon>
            <Grid container >
                <ListItemText primary={title} />
                <ListItemText secondary={ newBody }/>
            </Grid>
        </ListItemButton>
    </ListItem> 
  )
}
