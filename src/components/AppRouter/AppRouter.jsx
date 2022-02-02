import { Route, Routes } from 'react-router-dom';
import { privateRouter, publicRouter } from '../../router';

const AppRouter = () => {
    const isAuth = false;
    return (
        <>
            <Routes>
                {isAuth
                    ? privateRouter.map((el) => (
                          <Route
                              key={el.path}
                              path={el.path}
                              element={el.element}
                          />
                      ))
                    : publicRouter.map((el) => (
                          <Route
                              key={el.path}
                              path={el.path}
                              element={el.element}
                          />
                      ))}
            </Routes>
        </>
    );
};

export default AppRouter;
