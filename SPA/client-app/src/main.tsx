import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import './Components/Header/Header.tsx'
import Header from './Components/Header/Header.tsx'
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
import './Css/all.min.css'
import './Css/color.css'
import './Css/owl.crousel.min.css'
import './Css/prettyPhoto.css'
import './Css/responsive.css'
import './Css/slick.css'
import Slider from '../src/Components/Slider/Slider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
     <Header/>
    <Slider/>
  </React.StrictMode>,
)
