interface EnderecoProps {
  width?: string;
  height?: string;
}

export default function Endereço({
  width = "100%",
  height = "340px",
}: EnderecoProps) {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7208.829853494413!2d-49.240802!3d-25.390918!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce663299c6b1f%3A0xe11ddd58c74e1214!2sSIEG%20-%20AD!5e0!3m2!1spt-BR!2sbr!4v1701552421452!5m2!1spt-BR!2sbr"
        width={width}
        height={height}
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}
