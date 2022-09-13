import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import Home from './Home';
import Local from './Local';
import PropDrilling from './PropDrilling';
import Context from './Context';
import Redux from './Redux';
import Zustand from './Zustand';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="local" element={<Local />}/>
                <Route path="props" element={<PropDrilling/>}/>
                <Route path="context" element={<Context/>}/>
                <Route path="redux" element={
                    <Provider store={store}>
                     <Redux/>
                    </Provider>
                }/>
                <Route path="zustand" element={<Zustand />}/>
            </Routes>
        </BrowserRouter>
    );
}
export default AppRouter;