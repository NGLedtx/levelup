function Formatdate() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });
  return(
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)
  );
}
export default Formatdate;
