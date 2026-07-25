import { supabase } from "../../lib/supabase";


export async function POST({ request }) {

  const data = await request.json();


  const {
    name,
    email,
    phone,
    message
  } = data;



  const { error } = await supabase
    .from("contact_messages")
    .insert([
      {
        name,
        email,
        phone,
        message
      }
    ]);



  if(error){

    return new Response(
      JSON.stringify({
        success:false,
        error:error.message
      }),
      {
        status:500
      }
    );

  }



  return new Response(
    JSON.stringify({
      success:true
    }),
    {
      status:200
    }
  );

}