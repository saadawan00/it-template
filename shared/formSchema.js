const oFormSchema = {
  email: {
    status: true,
    value: "",
    rules: ["isRequired", "isEmail"]
  },
  name: {
    status: true,
    value: "",
    rules: ["isRequired"]
  },
  phone: {
    status: true,
    value: "",
    rules: ["isRequired"]
  },
  message: {
    status: true,
    value: "",
    rules: ["isRequired"]
  }
};

export default oFormSchema;