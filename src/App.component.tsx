import { a, useTransition } from '@react-spring/web'
import { Suspense } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'
import { useQueryErrorResetBoundary } from 'react-query'
import { ErrorBoundary } from 'react-error-boundary'

import { ArtWork } from './ArtWork.component'
import { Home } from './Home.component'

function App() {
  const location = useLocation()
  const { reset } = useQueryErrorResetBoundary()
  const transitions = useTransition(location, {
    from: { opacity: 0, height: '0%' },
    enter: { opacity: 1, height: '100%' },
    leave: { opacity: 0, height: '0%' }
  })

  return transitions((props) => (
    <a.div style={props}>
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <button onClick={() => resetErrorBoundary()}>Try again</button>
          </div>
        )}
      >
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            <Route path='/artwork/:artWorkId'>
              <ArtWork />
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </Suspense>
      </ErrorBoundary>
    </a.div>
  ))
}

export { App }
