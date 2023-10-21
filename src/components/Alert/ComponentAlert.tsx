import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import Alert from "@mui/material/Alert";
import { useTodos } from "../../Context/TodoContext";

interface IProps {
  open: boolean;
}

const ComponentAlert = ({ open }: IProps) => {
  const { handleTouch, typeAlert } = useTodos();

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    handleTouch(false);
  };

  const renderTypeAlert = () => {
    switch (typeAlert) {
      case "error":
        return (
          <Alert variant="filled" severity="error">
            Erro ao deletar tarefa.
          </Alert>
        );
      case "info":
        return (
          <Alert variant="filled" severity="info">
            Sua tarefa esta no fim da data.
          </Alert>
        );
      case "success":
        return (
          <Alert variant="filled" severity="success">
            Sua tarefa foi adicionada com sucesso
          </Alert>
        );
      case "deleteSuccess":
        return (
          <Alert variant="filled" severity="success">
            Tarefa Deletada com sucesso.
          </Alert>
        );
      case "warning":
        return (
          <Alert variant="filled" severity="warning">
            Esta carregando.
          </Alert>
        );
    }
  }

  return (
    <Stack spacing={2}>
      <Snackbar open={open} autoHideDuration={1500} onClose={handleClose}>
        {renderTypeAlert()}
      </Snackbar>
    </Stack>
  );
};

export default ComponentAlert;
