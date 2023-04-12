import { Routes, Route } from 'react-router-dom'
import { ROUTES } from './routes';
import { RouteList } from './interfaces/routes';
import NavMenu from './components/NavMenu';
import { ChangeTitle } from './helpers';

function App(props: any) {
  ChangeTitle()

  return (
    <div>
      <NavMenu />
      <Routes>
        {
          ROUTES.map((route: RouteList) => (
            <Route key={route.path} path={route.path} element={route.element}/>
          ))
        }
      </Routes>
    </div>
  );
}

export default App;
