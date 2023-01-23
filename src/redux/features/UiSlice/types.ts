interface UiState {
  alert: string;
  state: "success" | "info" | "warning" | "error";
  isLoading?: boolean;
}

export default UiState;
