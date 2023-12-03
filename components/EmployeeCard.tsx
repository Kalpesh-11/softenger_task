import { Card, CardContent, Typography, Button, Avatar } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { EmployeeCardProps } from "@/types";
const EmployeeCard = ({ employee, onEdit, onRemove }: EmployeeCardProps) => {
  return (
    <Card
      key={employee.id}
      style={{ maxWidth: "300px", margin: "10px", width: "28%" }}
      className="shadow-xl cursor-pointer"
    >
      <CardContent>
        <Avatar
          alt={employee.employee_name}
          src={`/user_pictures/${employee.profile_image}`}
          style={{
            width: "80px",
            height: "80px",
            margin: "0 auto",
            backgroundColor: "#D7C8F4",
          }}
        />
        <Typography
          variant="h6"
          component="div"
          style={{ textAlign: "center", margin: "10px 0" }}
        >
          {employee.employee_name.length <= 15
            ? employee.employee_name
            : employee.employee_name.substr(0, 15) + "..."}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Salary: {employee.employee_salary.toLocaleString()}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Age: {employee.employee_age}
        </Typography>
        <div className="flex mt-4 w-full justify-around gap-2">
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            color="secondary"
            onClick={() => onEdit(employee.id)}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            startIcon={<DeleteIcon />}
            color="secondary"
            onClick={() => onRemove(employee.id)}
          >
            Delete
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
