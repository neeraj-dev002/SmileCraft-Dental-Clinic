import { supabase } from "../../lib/supabase";


export async function POST({ request }) {

  try {

    const body = await request.json();


    const {
      name,
      email,
      phone,
      message
    } = body;


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



    if (error) {

      console.log("SUPABASE ERROR:", error);


      return new Response(
        JSON.stringify({
          success:false,
          error:error.message
        }),
        {
          status:500,
          headers:{
            "Content-Type":"application/json"
          }
        }
      );

    }



    return new Response(
      JSON.stringify({
        success:true
      }),
      {
        status:200,
        headers:{
          "Content-Type":"application/json"
        }
      }
    );


  } catch(error) {


    console.log("API ERROR:", error);


    return new Response(
      JSON.stringify({
        success:false,
        error:error.message
      }),
      {
        status:500,
        headers:{
          "Content-Type":"application/json"
        }
      }
    );

  }

}