import Title from "../Components/title/Title";
import { Wrapper } from "../assets/Wrappers/contact";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { Box, TextField, Button } from "@mui/material";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aqui você pode lidar com os dados do formulário
    console.log("Formulário enviado!");
  };

  return (
    <Wrapper>
      <Title text="contato" />
      <div className="about-content">
        <div>
          <Box
            sx={{
              maxWidth: 1200,
              margin: "auto",
              padding: 2,
              //   bgcolor: "#d9e4e8",
            }}
          >
            <form onSubmit={handleSubmit}>
              <TextField
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
              <TextField
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
              <TextField
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
              <TextField
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
              <Button
                className="button"
                type="submit"
                variant="contained"
                sx={{ mt: 2 }}
              >
                Enviar
              </Button>
            </form>
          </Box>
        </div>
        <div className="social-links">
          <div className="social">
            <a href="">
              <span>
                <MdEmail />
              </span>
            </a>
            <span className="title">Email</span>
            <span className="info">guilhermeestevangui@hotmail.com</span>
          </div>

          <div className="social">
            <a href="">
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <span className="title">WhatsApp</span>
            <span className="info">(81) 99731-1453</span>
          </div>

          <div className="social">
            <a href="">
              <span>
                <IoLocationSharp />
              </span>
            </a>
            <span className="title">Localização</span>
            <span className="info">Recife, PE</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
