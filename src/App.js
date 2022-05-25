import {Routes,Route,Navigate} from "react-router-dom"
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import FuntionalComp from './FuctoinalComp/FunctionalComp';
import Error from './Component/Error';
import Info from './Component/Info';
import Navbar from './Component/Navbar';
import Post from './Component/Post';
import Login from './Component/Pages/Profile';
import Dashboard from './Component/Pages/Dashboard';
import Protected from './Component/Protected';
// import Form from './Component/Form';
import Listkey from './FuctoinalComp/Listkey';
import Button from '@mui/material/Button';
import { useState } from 'react';
import Todo from "./Todoapp/Todo";
import Materail from "./Materail/Materail";
import Materials from './Materail/Materials';
import Materialst from './Materail/Materialst';
import BUtton from "./Materail/BUtton";
import Grids from "./Materail/Grids";
import Papers from "./Materail/Papers";
import MainCustom from "./CustomComp/MainCustom";
import NewTaskForm from "./Contexts/NewTaskForm";
import TaskList from "./Contexts/TakLIst";
import Tabulars from "./Contexts/Tabulars";
import DemoF from "./Error/DemoF";
import ErrorBoundry from "./Error/ErrorBoundry";
import Demos from "./Error/Demos";
import Portals from "./Portals/Portals";
import { Modal } from "./Portals/Modal";
import StyledCommp from "./StyledComp/StyledComp";
import Respnsive from "./StyledComp/Respnsive";
import Index from "./Media/Index";
import SearchData from "./Searchs/SearchData";


function App() {

  return (
    <div className="App">
  {/* <Navbar /> */}
    {/* <Routes>
      <Route path='/'  element={<Home/>}/>
      <Route path='/about'  element={<About/>}/>
      <Route path='/contact'  element={<Contact/>}/>
      <Route path='/info'  element={<Info/>}/>
      <Route path='*'  element={<Error/>}/>
      <Route path='/post/:category'  element={<Post/>}/>
      <Route path='/post/:category/id'  element={<Post/>}/>
      <Route path='/dashboard'  element={<Dashboard/>}/>
      <Route path='/login'  element={<Login/>}/>
      <Route path='*'  element={<Navigate to='/'/> }/>
      <Route path='/' element={ <Navbar />} >
        <Protected  path={"/contact"} element={<Contact/>}/>
      <Route index element={<Home/>} />
         <Route path='/home/about' element={<About/>} />
         <Route path='contact' element={<Contact/>} />
         <Route path='post' element={<Post/>} />
      <Route path='info'  element={<Info/>}/>
         <Route path='*' element={<Error/>} />
      </Route>
    </Routes> */}
    {/* <FuntionalComp/> */}
 
    {/* <Form /> */}
    {/* <h2>Apps</h2> */}
    {/* <Button variant="outlined" disableElevation>Contained</Button> */}
    {/* <Listkey /> */}
    {/* <Todo /> */}
  {/* <Materail />
  <Materials />
  <Materialst /> */}
  {/* <Grids />
  <Papers /> */}
  {/* <BUtton /> */}
  {/* <MainCustom /> */}
  {/* <MainCustom title="Hi" type="a" color="green" />
  <MainCustom title="App" type="b" color="red" height='70px'/> */}
  {/* <NewTaskForm />
  <TaskList /> */}
  {/* <Tabulars /> */}

  {/* <h1>Error Boundary</h1>
  <ErrorBoundry>
  <DemoF />
  </ErrorBoundry>
  <ErrorBoundry>
  <Demos />
  </ErrorBoundry> */}
{/* <h2>React Portal</h2>
  <Portals />
  <Modal /> */}
  {/* <h2>Styled Comp</h2>
  <StyledCommp /> */}

  {/* <h1>Resposive</h1>
  <Respnsive /> */}
  <h1>material Media Query</h1>
  <Index />
  {/* <h1>Search </h1> */}
  {/* <SearchData /> */}
    </div>
  );
}

export default App;
