import HeaderComponent from './components/HeaderComponent'
import Schools from './components/SchoolsComponent'

import Projects from './components/ProjectsComponent'
import Media from './components/MediaComponent'

import { MantineProvider } from '@mantine/core'

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <div className='Content'>
        <HeaderComponent />
        <Media />

        <Schools />
        <Projects />
      </div>
    </MantineProvider>
  )
}

export default App