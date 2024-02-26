import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import WatchScreen from './components/WatchScreen';
import MainContainer from './components/MainContainer';
import myAppStore from './utils/store';

const appRoutes= createBrowserRouter([
  {
    path: '/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'/watch',
        element: <WatchScreen/>
      }
    ]
  }
])

function App() {
  return (
    <div >
    <Provider store={myAppStore}>
      <RouterProvider router={appRoutes}/>
      </Provider>
    </div>
  );
}

export default App;
