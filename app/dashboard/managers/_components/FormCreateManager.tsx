import { Button, Input } from "@nextui-org/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Location } from "@/entities";
import createManager from "@/actions/managers/create";

export default function FormCreateManager({ stores }: { stores: Location[] }) {
  return (
    <form className="flex flex-col gap-4" action={createManager}>
      <h1 className="text-4xl font-bold text-white text-center">
        Crear Manager
      </h1>
      <Input label="Nombre completo" name="managerFullName" />
      <Input label="Salario" name="managerSalary" />
      <Input label="Correo" name="managerEmail" />
      <Input label="Número de teléfono" name="managerPhoneNumber" />
      <SelectStore stores={stores} />
      <Button color="primary" type="submit">
        Crear Manager
      </Button>
    </form>
  );
}
