import createEmployee from "@/actions/employees/create";
import { Button, Input } from "@nextui-org/react";

export default function FormCreateEmployee(){
    return(
        <form action={createEmployee} className="flex flex-col gap-2 p-8 rounded-md m-2 bg-orange-600 h-fit">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Marco" />
            <Input isRequired={true} label="Apellidos" name="employeeLastName" placeholder="Portillo" />
            <Input isRequired={true} label="Correo electrónico" name="employeeEmail" placeholder="marco@port13.com" />
            <Input isRequired={true} label="Num. de teléfono" name="employeePhoneNumber" placeholder="5591xxxxxx"/>
            <Input name="employeePhoto" type="file" />
            <Button type="submit" color="primary">Crear empleado</Button>
        </form>
    )
}