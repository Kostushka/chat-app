import { BrowserRouter } from 'react-router-dom';
import Navigation from './components/Navigation';
import AppRouter from './components/AppRouter';
import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <Navigation />
            <AppRouter />
        </BrowserRouter>
    );
};

export default App;
