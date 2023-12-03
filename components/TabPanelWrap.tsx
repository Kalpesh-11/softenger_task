import { TabPanelProps } from "@/types";
import Box from "@mui/material/Box";
function TabPanelWrap(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className="min-h-[60vh] h-[70vh] overflow-y-auto"
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

export default TabPanelWrap;
