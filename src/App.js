import './App.css';
import Head from './component/Head';
import Body from './component/Body';
import store from './utils/store';
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MainContainor from './component/MainContainor';
import WatchPage from './component/WatchPage';
import Demo from './component/Demo';

const appRouter = createBrowserRouter([{
  // whenever the path will "/" then the approuter will render body component below head because we provide approuter to RouterProvider and the children will go whereever our outlet is and we will create outlet in body because we have to render body's children and body's children should render according to behaivior so we use outlet
  path:"/",
  element:<Body/>,
  children:[
    {
      path:"/",
      element: <MainContainor />

    },
    {
      path:"watch",
      element: <WatchPage />

    },
    {
      path:"demo",
      element: <Demo />

    }

    ]
}

])

function App() {
  return (
    <Provider store={store}>
    <div>
    <Head />
    <RouterProvider router={appRouter} />
    </div>
    </Provider>
  );
}

export default App;


/**
 * Head
 * body
 *   sidebar
 *     menu
 *   mainContainer
 *     buttonList
 *     VideoContainor
 *     VideoCard
 * 
 * 
 * 
 * 
 */