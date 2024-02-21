import { Box, TextField, Button } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { useForm as hookForm } from "react-hook-form";
import { useForm as formspreeForm } from "@formspree/react";

const ContactForm = () => {
  const [state, submit] = formspreeForm("xknadrwy");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = hookForm();

  const onSubmit = (data) => {
    console.log(data);
    submit(data);
    if (state.succeeded) {
      // Toast
    }
  };

  return (
    <Box className="form-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name", { required: true })}
          error={!!errors.name}
          required
          className="form-field"
          fullWidth
          margin="normal"
          label="Nome"
          variant="outlined"
          name="name"
          InputLabelProps={{
            style: { color: "#777b84" },
          }}
          sx={{ input: { color: "#b0b4ba" } }}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
        <TextField
          {...register("email", { required: true })}
          error={!!errors.email}
          required
          className="form-field"
          fullWidth
          margin="normal"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          InputLabelProps={{
            style: { color: "#777b84" },
          }}
          sx={{ input: { color: "#b0b4ba" } }}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
        <TextField
          {...register("title", { required: true })}
          error={!!errors.title}
          required
          className="form-field"
          fullWidth
          margin="normal"
          label="Título"
          variant="outlined"
          name="title"
          InputLabelProps={{
            style: { color: "#777b84" },
          }}
          sx={{ input: { color: "#b0b4ba" } }}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
        <TextField
          {...register("message", { required: true })}
          error={!!errors.message}
          required
          className="form-field"
          fullWidth
          margin="normal"
          label="Mensagem"
          variant="outlined"
          multiline
          rows={4}
          name="message"
          InputLabelProps={{
            style: { color: "#777b84" },
          }}
          InputProps={{
            style: { color: "#b0b4ba" },
          }}
        />
        {errors.name && (
          <FormHelperText error>{errors.name.message}</FormHelperText>
        )}
        <Button
          className="button"
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
        >
          Enviar Mensagem
        </Button>
      </form>
    </Box>
  );
};
export default ContactForm;
