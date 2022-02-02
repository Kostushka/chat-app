import Chat from '../components/Chat';
import Login from '../components/Login';

export const privateRouter = [
    { path: 'chat', element: <Chat /> },
    { path: '*', element: <Chat /> },
];
export const publicRouter = [
    { path: 'login', element: <Login /> },
    { path: '*', element: <Login /> },
];
