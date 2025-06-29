import '/src/assets/styles/index.css';
import { Route, Routes } from 'react-router-dom';
import { useAnchorLinks } from '../hooks/useAnchorLinks';
import { routes } from './routes';
import { useScreenSize } from '../hooks/useScreenSize';


function App() {
  useAnchorLinks();
  useScreenSize();
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={route.element} />
      ))}
    </Routes>
  );
}

export default App;
