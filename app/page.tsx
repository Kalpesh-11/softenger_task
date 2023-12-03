import { EmployeeTabs } from "@/components";

export default async function Home() {
  return (
    <main className="px-24 pt-4 flex justify-center w-full flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Employee CRM</h2>
      <EmployeeTabs />
    </main>
  );
}
