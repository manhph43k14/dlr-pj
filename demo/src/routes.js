import React from 'react'
import HomePage from './pages/Homepage/Homepage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import LecturersListPage from './pages/LecturersListPage/LecturersListPage';
import LecturersActionPage from './pages/LecturersActionPage/LecturersActionPage';

const routes =[
    {
        path: '/',
        exact: true,
        main: () => <HomePage/>
    },
    {
        path: '/lecturers',
        exact: false,
        main: ({match}) => <LecturersListPage match = {match}/>
    },
    {
        path: '/review/:slug',
        exact: false,
        main: ({match}) => <LecturersActionPage match = {match}/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    }
    
];

export default routes;