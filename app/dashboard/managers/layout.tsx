import ManagerCards from "./[id]/_components/ManagerCards";

export default function LayoutManagers({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-4/12 max-h-[90vh] h-[90vh] overflow-hidden overflow-y-auto">
        <ManagerCards></ManagerCards>
      </div>
      <div>
        {children}
      </div>
    </>
  );
}
