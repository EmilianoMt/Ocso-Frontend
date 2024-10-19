import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import SelectLocation from "./_components/SelectLocation";
import { TOKEN_NAME } from "@/constants";

const LocationsPage = async ({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) => {
  const userCookies = cookies();
  const token = userCookies.get(TOKEN_NAME)?.value;
  const { data } = await axios.get<Location[]>(
    "http://127.0.0.1:4000/locations",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  // const cantidad = countLocations?.data?.length;
  return (
    <div className="w-7/12">
      <div className="w-full flex flex-col items-center h-[90vh] bg-red-50">
        <div className=" w-8/12 mx-10 my-10">
          <SelectLocation locations={data} store={searchParams.store} />
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
