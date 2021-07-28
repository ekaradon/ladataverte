import { a, useTransition } from '@react-spring/web'
import { Route, Switch, useLocation } from 'react-router-dom'

import { ArtWork } from './ArtWork.component'
import { Home } from './Home.component'

function App() {
  const location = useLocation()
  const transitions = useTransition(location, {
    from: { opacity: 0, height: '0%' },
    enter: { opacity: 1, height: '100%' },
    leave: { opacity: 0, height: '0%' }
  })

  return transitions((props) => (
    <a.div style={props}>
      <Switch>
        <Route path='/artwork/:artWorkId'>
          <ArtWork />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </a.div>
  ))
}

export { App }
