import React from 'react' ;
import {Box ,
    useTheme
} from "@mui/material" ;
import { useGetCustomersQuery } from 'state/api';
import Header from 'components/Header';
import { DataGrid } from '@mui/x-data-grid';


const Customers = () => {
    const theme =useTheme();
    const {data , isLoading} = useGetCustomersQuery() ;
 
    const columns = [
        {
            field : "_id",
            headerName : "ID",
            felx : 1,
        },
        {
            field : "name",
            headerName : "Name",
            felx : 0.5,
        },
        {
            field : "email",
            headerName : "Email",
            felx : 1,
        },
        {
            field : "phoneNumber",
            headerName : "Phone Number",
            felx : 0.5,
            renderCall : (params)=>{
                return params.value.replace(/^(\d{3})(\d{3})(\d{4})/ , "($1)$2-$3") ;
            }
        },
        {
            field : "country",
            headerName : "Country",
            felx : 0.4,
        },
        {
            field : "occupation",
            headerName : "Occupation",
            felx : 1,
        },
        {
            field : "role",
            headerName : "Role",
            felx : 0.5,
        },
    ]
    return (
    <Box
     margin="1.5rem 2.5rem" 
    >
        <Header title="CUSTOMERS" subtitle="List of Customers" />
        <Box
          mt="40px"
          height="75vh"
           sx={{
            "& .MuiDataGrid-root" : {
                border : "none"
            },
            "& .MuiDataGrid-cell": {
                borderBottom : "none"
            },
            "& .MuiDataGrid-columnHeaders" : {
                backgroundColor : theme.palette.background.alt,
                color : theme.palette.secondary[100],
                borderBottom : "none"
            },
            "& .MuiDataGrid-virtualScroller" : {
                backgroundColor : theme.palette.light,
            },
            "& .MuiDataGrid-footerContainer" : {
                backgroundColor : theme.palette.light,
                color : theme.palette.secondary[100],
                borderTop : "none"
            },
            "& .MuiDataGrid-toolbarContainer .MuiButton-text" : {
                color : `${theme.palette.secondary[200]} !important`,
            }


           }}
        > 

            <DataGrid 
                loading ={isLoading || !data }
                getRowId={(row) => row._id}
                rows={data || [] }
                columns={columns}
            />
        </Box>
    </Box>
  )
}

export default Customers ;
