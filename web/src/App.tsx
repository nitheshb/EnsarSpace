
import { Provider as ReduxProvider } from 'react-redux'
import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'


import AuthProvider from 'src/context/firebase-auth-context'
import FatalErrorPage from 'src/pages/FatalErrorPage'
import Routes from 'src/Routes'
import store from 'src/state/store'
import { SnackbarProvider } from 'notistack'
import './index.css'


const App = () => (
  <FatalErrorBoundary page={FatalErrorPage}>
    <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
      <ReduxProvider store={store}>
        <SnackbarProvider
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          autoHideDuration={3000}
          maxSnack={3}
        >
          <AuthProvider>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <Routes />
            </LocalizationProvider>
          </AuthProvider>
        </SnackbarProvider>
      </ReduxProvider>
    </RedwoodProvider>
  </FatalErrorBoundary>
)

export default App
