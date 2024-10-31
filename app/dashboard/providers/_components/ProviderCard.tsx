import { Provider } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";

export default function ProviderCard({ provider }: { provider: Provider }) {
  return (
    <Card>
      <CardHeader>{provider.providerName}</CardHeader>
      <Divider />
      <CardBody>
        <p>Email:</p>
        <b>{provider.providerEmail}</b>
        <p>Teléfono:</p>
        <b>{provider.providerPhoneNumber}</b>
        {provider.products ? (
          <p>
            Tiene: <b>{provider.products.length} productos</b>
          </p>
        ) : (
          <p>No tiene productos</p>
        )}
      </CardBody>
    </Card>
  );
}
