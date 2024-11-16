import { LuPlus } from "react-icons/lu";
import ModalGeneric from "../_components/ModalGeneric";
import FormCreateManager from "./_components/FormCreateManager";
import { authHeaders } from "@/helpers/authHeaders";
import { API_URL } from "@/constants";
import { Location } from "@/entities";

const ManagersPage = async () => {
    const responseStore = await fetch(`${API_URL}/locations`,{
        headers:{
            ...authHeaders()
        }
    })
    const stores : Location[] = await responseStore.json()
  return (
    <ModalGeneric icon={<LuPlus size="20" />}>
      <FormCreateManager stores={stores} />
    </ModalGeneric>
  );
};
export default ManagersPage;
