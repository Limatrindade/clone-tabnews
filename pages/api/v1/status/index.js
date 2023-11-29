function status(request, response) {
  response.status(200).json({ chave: "Matheus você é um cara legal" });
}

export default status;
