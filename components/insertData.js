import {supabase} from '../api'

const insertData = (dataFields, refTable) => {

    const { data, error } = await supabase
    .from(refTable)
    .insert(dataFields);
  console.log(data);
  console.log(error);
  return data
}

export function insertData()