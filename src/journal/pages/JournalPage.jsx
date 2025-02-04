import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@mui/material';
import { JournalLayout } from '../layout/';
import { NoteView, NothingSelectedView } from '../views/';
import { AddOutlined } from '@mui/icons-material';
import { startNewNote } from '../../store';


export const JournalPage = () => {
  const {active, isSaving} = useSelector(status => status.journal)
  const dispatch = useDispatch()

  const onClickNewNote = () => {
    dispatch(startNewNote());
  }
  return (
    <JournalLayout>
      {!!active ? <NoteView /> : < NothingSelectedView />}
      <IconButton
        onClick={onClickNewNote}
        disabled={isSaving}
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
