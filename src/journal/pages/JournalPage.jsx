import { useDispatch } from 'react-redux';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/';
import { NoteView, NothingSelectedView } from '../views/';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store';


export const JournalPage = () => {
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
      {/*<Typography>Reprehenderit fugiat sint esse adipisicing occaecat non ut occaecat consectetur nostrud quis. Aliqua ad culpa tempor cupidatat aute eiusmod esse ullamco. Nulla ut amet ad nisi non ad ex reprehenderit aliqua occaecat. Exercitation aliqua id aliqua tempor proident sunt.</Typography>*/}
      
      < NothingSelectedView />
      {/*<NoteView />*/}
      <IconButton
        onClick={onClickNewNote}
        size='large'
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': {backgroundColor: 'error.main', opacity: 0.9},
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{fontSize: 30}}/>
      </IconButton>
    </JournalLayout>
  )
}
