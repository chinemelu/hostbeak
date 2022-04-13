import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import * as React from 'react'

const IndexPage = React.lazy(() => import('./pages/Index/Index.jsx'))

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/"  element={< IndexPage />} />
        </Routes>
      </div>
    </Router>
  );
}
