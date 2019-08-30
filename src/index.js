import React from 'react';
import {render} from 'react-dom';
import decodeToken from './helpers/decodeToken';
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const user = decodeToken();

render(<><App user={user} /> <ToastContainer /></>, document.querySelector("#root"));
