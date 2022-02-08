
import React from 'react'
import './App.css'
import MaterialForm from "./components/materialForm";
import SignInOutContainer from "./container/index"
import MyTable from './components/MyTable'
import DataTable from './components/Table';
import TollDetails from './components/TollDetails';
import VehicleDetails from './components/Vehichle';
import TollBooking from './components/TollBooking';
import BarChart from './components/BarChart';
import Customer from './components/Customer';
import FairDetails from './components/FairDetails';
import AddStaff from './components/AddStaff';

function App() {
  return (
    <div className="App">
      <SignInOutContainer />
      {/* <TollDetails />
      <VehicleDetails />
      <TollBooking />
      < Customer />
      < FairDetails /> */}
      
      
    </div>
  );
}

export default App;
