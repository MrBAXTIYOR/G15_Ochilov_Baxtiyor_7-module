import { createSlice } from "@reduxjs/toolkit";
import { useQuery } from "react-query";
import { getJob } from "../../helpers/api";

const {data} = useQuery('job', getJob)

const slice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterData: (state, {payload})=> {
     return state = data.filter((e)=> {
      if(e.title === payload){
        return e;
      }
     })
    }
  }
})

export default slice.reducer;
export const {filterData} = slice.actions