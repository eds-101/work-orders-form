import { supabase } from '.';

export const dataUpload = async (dataFields: any, refTable: any) => {
  const { data, error } = await supabase
    .from(refTable)
    .insert(dataFields);
  console.log(data);
  if (error) {
    console.log(error);
    alert(
      'Something went wrong, please check your fields and try again'
    );
  }
  return data;
};
