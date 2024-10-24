import { Button, Input } from "@nextui-org/react";
import { createLocation } from "@/actions/locations/create";

export default function FromNewLocation() {
    return(
        <form action={createLocation}>
            <Input label="Nombre" name="locationName"/>
            <Button type="submit">Subir</Button>
        </form>
    )
}