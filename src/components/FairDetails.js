

import React from 'react'
import MaterialTable from 'material-table'

const FairDetails = () => {
    const { useState } = React;
    const [selectedRow, setSelectedRow] = useState(null);
  
    const [columns, setColumns] = useState([
      { title: 'VehicleType', field: 'vehicleTyple' },
      { title: 'Daily Pass', field: 'Daily_pass', initialEditValue: 'initial edit value' },
      { title: 'Monthly', field: 'monthly' },
      { title: 'Return', field: 'return' },

    
    ]);
  
    const [data, setData] = useState([
      { vehicleTyple: 'Truck', Daily_pass: '20000', monthly: '30000', return : '10000' },
      { vehicleTyple: 'Bus', Daily_pass: '15000', monthly: '7000', return : '6000' },
      

    ]);
  
    return (
      <MaterialTable
        title="Fair Details"
        columns={columns}
        data={data}
        editable={{
          onRowAdd: newData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                setData([...data, newData]);
                
                resolve();
              }, 1000)
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
  
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                
                resolve()
              }, 1000)
            }),
        }}

        onRowClick={((evt, selectedRow) => setSelectedRow(selectedRow.tableData.id))}
        options={{
          rowStyle: rowData => ({
            backgroundColor: (selectedRow === rowData.tableData.id) ? '#EEE' : '#FFF'
        })
      }}

      options = {{
          exportButton : true
      }}

      
      />
    )
  }

  export default FairDetails