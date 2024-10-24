"use server";

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
    console.log(location);
    
}