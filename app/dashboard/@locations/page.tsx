import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from './_components/FormNewLocation';
import DeleteLocationButton from "./_components/DeleteLocationButton";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import UpdateLocation from "./_components/UpdateLocation";
import FormUpdateLocation from "./_components/FormUpdateLocation";

const LocationsPage = async ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) => {
  const response = await fetch(
    `${API_URL}/locations`,
    {
      headers: {
        ...authHeaders()
      },
      next:{
        tags: ["dashboard:locations"]
      }
    }
  );
  let data: Location[] = await response.json();
  data = [
    {
      locationId: 0,
      locationName: "Ninguna",
      locationLatLng:[0,0],
      locationAddress: "No especificada",
    },
    ...data
  ]
  return (
    <div className="w-7/12">
      <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
        <div className=" w-8/12 mx-10 my-10">
          <SelectLocation locations={data} store={searchParams.store} />
        </div>
          <div className="w-8/12">
            <LocationCard store={searchParams.store}/>
          </div>
          <div className="w-6/12">
            <FormNewLocation searchParams={searchParams}/>
          </div>
          <DeleteLocationButton store={searchParams.store}/>
          <UpdateLocation>
                <FormUpdateLocation store={searchParams.store}/>
          </UpdateLocation>
      </div>
    </div>
  );
};

export default LocationsPage;
