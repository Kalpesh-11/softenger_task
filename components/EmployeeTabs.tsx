"use client";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import empStore from "@/stores/empStore";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import {
  AddEmployee,
  EditEmployee,
  TabPanelWrap,
  EmployeeList,
} from "@/components";

export default function EmployeeTabs() {
  const { setEmployees, employees, currentTab, setCurrentTab } = empStore();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const params = new URLSearchParams(searchParams);
  useEffect(() => {
    setEmployees();
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
    <main className="w-10/12 px-6 bg-white/90 shadow-2xl rounded-3xl">
      <Tabs
        value={currentTab}
        textColor="secondary"
        indicatorColor="secondary"
        onChange={handleChange}
        aria-label="Employee Dashboard"
        variant="fullWidth"
      >
        <Tab
          icon={<AddIcon />}
          iconPosition="start"
          label="Add Employee"
          {...tabProps(0)}
        />
        <Tab
          icon={<EditIcon />}
          iconPosition="start"
          label="Update Employee"
          {...tabProps(1)}
        />
        <Tab
          icon={<WebAssetIcon />}
          iconPosition="start"
          label="Browse"
          {...tabProps(2)}
        />
      </Tabs>
      <TabPanelWrap value={currentTab} index={0} key={0}>
        <AddEmployee />
      </TabPanelWrap>
      <TabPanelWrap value={currentTab} index={1} key={1}>
        <EditEmployee />
      </TabPanelWrap>
      <TabPanelWrap value={currentTab} index={2} key={2}>
        <EmployeeList />
      </TabPanelWrap>
    </main>
  );
}
