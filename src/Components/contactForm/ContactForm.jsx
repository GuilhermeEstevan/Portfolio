import { Box, TextField, Button } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { useForm } from "react-hook-form";
import { useForm as formspreeForm } from "@formspree/react";
import { toast } from "sonner";
import { useEffect, useState } from "react";

const ContactForm = () => {
  const [state, submit] = formspreeForm("xknadrwy");

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });

  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;

  const onSubmit = async (data) => {
    try {
      console.log(data);
      await submit(data);
      reset({ name: "", email: "", title: "", message: "" });
    } catch (error) {
      toast.error("Error no envio, tente novamente");
    }
  };

  useEffect(() => {
    if (state.succeeded) {
      toast.success("Mensagem Enviada! Entrarei em contato");
    }
  }, [state]);

  return (
    <Box className="form-box">
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name", { required: true })}
          error={!!errors.name}
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
          {state.submitting ? "Enviando..." : "Enviar Mensagem"}
        </Button>
      </form>
    </Box>
  );
};
export default ContactForm;
