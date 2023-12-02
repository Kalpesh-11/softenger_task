import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
const ViewEmployee = ({ employees, onEdit, onRemove }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
      {employees.map((employee) => (
        <Card key={employee.id} style={{ maxWidth: "300px", margin: "10px" }}>
          <CardContent>
            <Avatar
              alt={employee.employee_name}
              src={employee.profile_image}
              style={{ width: "80px", height: "80px", margin: "0 auto" }}
            />
            <Typography
              variant="h5"
              component="div"
              style={{ textAlign: "center", margin: "10px 0" }}
            >
              {employee.employee_name}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Salary: {employee.employee_salary}
            </Typography>
            <Typography color="textSecondary" gutterBottom>
              Age: {employee.employee_age}
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "20px",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={() => onEdit(employee.id)}
                startIcon={<EditIcon />}
              >
                Edit
              </Button>
              <IconButton
                color="secondary"
                onClick={() => onRemove(employee.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ViewEmployee;
