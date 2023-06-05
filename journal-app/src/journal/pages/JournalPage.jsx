import { IconButton, backdropClasses } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectedView } from "../views"
import { AddOutlined } from "@mui/icons-material"


export const JournalPage = () => {
  return (
    <JournalLayout>
      {/*<Typography > Lorem ipsum dolor sit, amet consectetur adipisicing elit.
         Quo omnis autem deserunt quae porro provident quis sequi
          perspiciatis delectus, saepe optio adipisci recusandae similique
           commodi, eum facere in architecto quod?
      </Typography>*/}

      <NothingSelectedView />

      {/*<NoteView />*/}

      <IconButton 
        size='large'
        sx={{
            color:'white',
            backgroundColor: 'error.main',
            ':hover': {backgroundColor: 'error.main', opacity: 0.9},
            position: 'fixed',
            right: 50,
            bottom: 50
        }}
        >
        <AddOutlined />
      
      </IconButton>
    </JournalLayout>

  )
}

