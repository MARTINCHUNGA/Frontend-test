import React from 'react'
import {Bar} from 'react-chartjs-2'

const BarChart = () => {
    return(
        <div>
            <Bar 
             
            data = {{
                  labels : ['Buses', 'Trucks', ' Luxury Cars','Abnormal Vehicle','Minibus'],
                //   datasets: [{
                //       label : "MK per category",
                //       backgroundColor : ["#3e95cd","#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                //       data: [120000, 400000, 700000,70000,250000]
                //   }]
            }} 

        
            height={400}
            width={600}
            />
        </div>
    )
}


export default BarChart