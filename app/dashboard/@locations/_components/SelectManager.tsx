"use client";
import { Select, SelectItem } from "@nextui-org/react";
import { Manager } from "@/entities";

export default function SelectManager({ managers }: { managers: Manager[] }) {
  return (
    <Select name="manager" label="Select Manager">
      {managers.map((manager: Manager) => (
        <SelectItem key={manager.managerId} value={manager.managerId}>
          {manager.managerFullName}
        </SelectItem>
      ))}
    </Select>
  );
}
