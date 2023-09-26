import { Stack, Typography, Button } from "@mui/material";

function ChooseService() {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <Typography variant="h4">اختر الخدمة المناسبة</Typography>
      <Stack direction={"row"} gap={2}>
        <Button variant="contained" size="large">
          انشاء طلب
        </Button>
        <Button variant="outlined" size="large">
          متابعة الطلبات
        </Button>
      </Stack>
    </Stack>
  );
}

export default ChooseService;
