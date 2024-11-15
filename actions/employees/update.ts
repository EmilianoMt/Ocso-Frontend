"use server"

import { API_URL } from "@/constants";
import { authHeaders } from '../../helpers/authHeaders';
import { revalidateTag } from "next/cache";

export default async function updateEmployee(employeeId: string, formdata: FormData) {
    formdata.delete("$ACTION_REF_0")
    formdata.delete("$ACTION_0:1")
    formdata.delete("$ACTION_0:0")
    const response = await fetch(`${API_URL}/employees/${employeeId}`, {
        method: 'PATCH',
       headers:{
        ...authHeaders()
       },
        body: formdata
    });
    if (response.status === 200) revalidateTag('dashboard:employees');
    console.log(await response.json());
    return 
}