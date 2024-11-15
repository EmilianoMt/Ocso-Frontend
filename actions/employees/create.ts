"use server"

import { API_URL } from "@/constants";
import { authHeaders } from '../../helpers/authHeaders';
import { revalidateTag } from "next/cache";

export default async function createEmployee(formdata: FormData) {
    formdata.delete("$ACTION_REF_0")
    formdata.delete("$ACTION_0:1")
    formdata.delete("$ACTION_0:0")
    const response = await fetch(`${API_URL}/employees`, {
        method: 'POST',
       headers:{
        ...authHeaders()
       },
        body: formdata
    });
    if (response.status === 201) revalidateTag('dashboard:employees');
    return 
}