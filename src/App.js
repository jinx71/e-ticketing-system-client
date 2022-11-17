
import { RouterProvider } from 'react-router-dom';
import './App.css';
// import Home from './Component/Pages/Home/Home';
import { router } from './Routes/Routes';
function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
