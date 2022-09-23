export const root = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "10px",
};

export const optionWrapper = {
  px: "15px",
  py: "5px",
  transition: "all .2s ease-in-out",
  borderRadius: "99px",
  "& > *": {
    transition: "all .2s ease-in-out",
    color: "secondary.main",
    cursor: "pointer",
    opacity: "0.3",
    fontWeight: 400,
  },
};

export const activeOptionWrapper = {
  px: "15px",
  py: "5px",
  backgroundColor: "secondary.main",
  borderRadius: "99px",
  transition: "all .2s ease-in-out",
  "& > *": {
    transition: "all .2s ease-in-out",
    color: "tertiary.main",
    cursor: "pointer",
    fontWeight: 400,
  },
};
