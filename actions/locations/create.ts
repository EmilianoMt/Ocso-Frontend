"use server";
import { API_URL} from "@/constants";
import { Location } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";


export async function createLocation(fromData: FormData){    
    let location: any = {};
    let locationLatLng = [0,0] 
    for (const key of fromData.keys()){
        const value = fromData.get(key);
        if (value) {
            if (key === "locationLat") {
                locationLatLng[0] = +value;
            }else if(key === "locationLng"){
                locationLatLng[1] = +value;
            }else{
                location[key] = value;
            }
        }
    }
    location.locationLatLng = locationLatLng;
    const response = await fetch(`${API_URL}/locations`,{
        method: "POST",
        body: JSON.stringify(location),
        headers: {
            "Content-Type": "application/json",
            ...authHeaders()
        }
    })
    const {locationId} : Location = await response.json();
    if (response.status === 201) {
        revalidateTag("dashboard:locations");
        redirect(`/dashboard?store=${locationId}`);
    }
}