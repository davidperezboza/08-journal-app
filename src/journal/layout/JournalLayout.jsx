import { Box } from "@mui/material"

const drawerWidth = 240;

export const JournalLayout = ({children}) => {
    return (
        <Box sx={{display: 'flex'}}>
            {/* NavBar drawerWidth*/}

            {/* Sidebar drawerWidth*/}

            <Box
                component='main'
                sx={{flexGrow: 1, p: 3}}
            >
                {/** ToolBar */}
                {children}
            </Box>
        </Box>
    )
}
