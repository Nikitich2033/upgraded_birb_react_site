import { Box, Typography } from "@mui/material";
import * as styles from "./switchButton.styles";

const SwitchButton = ({ options, value, onChange }) => {
  return (
    <Box sx={styles.root}>
      {options.map((option, index) => (
        <Box
          key={index}
          onClick={() => onChange(option.value)}
          sx={
            value === option.value
              ? styles.activeOptionWrapper
              : styles.optionWrapper
          }
        >
          <Typography variant="h5">{option.label}</Typography>
        </Box>
      ))}
    </Box>
  );
};
export default SwitchButton;
