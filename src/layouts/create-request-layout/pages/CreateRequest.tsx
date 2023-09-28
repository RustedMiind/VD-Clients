import { Stack, Typography } from "@mui/material";
import CustomizedSteppers from "../components/Stepper";

function CreateRequest() {
  return (
    <Stack spacing={1}>
      <Typography variant="h5">انشاء طلب</Typography>
      <CustomizedSteppers />
    </Stack>
  );
}

export default CreateRequest;
