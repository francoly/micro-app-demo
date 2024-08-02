import React from 'react';
import {
  unstable_HistoryRouter as HistoryRouter,
  Link,
  Route,
  Routes,
} from 'react-router-dom';
import Example from './pages/example';
import Foo from './pages/foo';
import { BrowserHistory, createBrowserHistory } from 'history';
import styles from './App.module.less';

export interface AppProps {
  history?: BrowserHistory;
}

const currentHistory = createBrowserHistory();

function App({ history = currentHistory }: AppProps) {
  React.useEffect(() => {
    console.log('[mount] - React child');
    return () => {
      console.log('[unmount] - React child');
    };
  }, []);

  return (
    <div className={styles.app}>
       <HistoryRouter basename="/rsbuild-react" history={history}>
        <div className={styles.links}>
          <Link to="/">Rsbuild子系统首页</Link>
          <Link to="/foo">Rsbuild子系统子路由</Link>
        </div>
        <Routes>
          <Route path="/" element={<Example />} />
          <Route path="/foo" element={<Foo />} />
        </Routes>
      </HistoryRouter>

    </div>
  );
}

export default App;
