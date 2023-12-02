"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import empStore from "@/stores/empStore";
import {
  AddEmployee,
  EditEmployee,
  TabPanelWrap,
  ViewEmployee,
} from "@/components";
import EmployeeList from "./EmployeeList ";

export default function EmployeeTabs() {
  const { setEmployee, employees, currentTab, setCurrentTab } = empStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    setEmployee();
    const currentTab = params.get("t");
    setCurrentTab(Number(currentTab));
  }, []);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue);
    params.set("t", newValue.toString());
    router.push(pathname + "?" + params.toString());
  };
  function tabProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }
  return (
    <main>
      <Tabs
        value={currentTab}
        onChange={handleChange}
        aria-label="Employee Dashboard"
      >
        <Tab label="Item One" {...tabProps(0)} />
        <Tab label="Item Two" {...tabProps(1)} />
        <Tab label="Item Three" {...tabProps(2)} />
      </Tabs>
      <TabPanelWrap value={currentTab} index={0}>
        <AddEmployee />
      </TabPanelWrap>
      <TabPanelWrap value={currentTab} index={1}>
        <EditEmployee />
      </TabPanelWrap>
      <TabPanelWrap value={currentTab} index={2}>
        <EmployeeList />
      </TabPanelWrap>
    </main>
  );
}
