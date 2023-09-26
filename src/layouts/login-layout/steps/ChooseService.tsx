import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ProtectedComponent from "../../../components/ProtectedComponent";

function ChooseService() {
  const [openDialog, setOpenDialog] = useState(false);
  const navigate = useNavigate();
  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleConfirmDialog = () => {
    navigate("/");
  };

  return (
    <ProtectedComponent>
      <>
        <Dialog
          open={openDialog}
          onClose={handleCloseDialog}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {"هل تريد المتابعة لأنشاء طلب تصحيح جديد"}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              طلب التصحيح هو طلب يطلع على صورة حقيقية لتصميم الموقع. ومن هنا وجب
              على المصمم أن يضع نصوصا مؤقتة
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseDialog}>الرجوع</Button>
            <Button variant="contained" onClick={handleConfirmDialog} autoFocus>
              موافق
            </Button>
          </DialogActions>
        </Dialog>
        <Stack alignItems={"center"} spacing={2}>
          <Typography variant="h4">اختر الخدمة المناسبة</Typography>
          <Stack direction={"row"} gap={2}>
            <Button
              variant="contained"
              size="large"
              onClick={handleClickOpenDialog}
            >
              انشاء طلب
            </Button>
            <Button variant="outlined" size="large">
              متابعة الطلبات
            </Button>
          </Stack>
        </Stack>
      </>
    </ProtectedComponent>
  );
}

export default ChooseService;
