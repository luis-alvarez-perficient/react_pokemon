import { useEffect, useState } from "react";

type Props = {
  url: string;
  options?: RequestInit;
};

function UseFetchImage({ url }: Props) {
  const [imagenUrl, setImagenUrl] = useState<string | null>(null);

  useEffect(() => {
    // Reemplaza esta URL con el endpoint que devuelve la imagen
    fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
        // Crear una URL local para el blob
        const imageObjectURL = URL.createObjectURL(blob);
        setImagenUrl(imageObjectURL);
      })
      .catch((error) => {
        console.error("Error al cargar la imagen:", error);
      });
  }, [url]);

  return (
    <div>
      <h2>Imagen cargada por fetch</h2>
      {imagenUrl ? (
        <img src={imagenUrl} alt="Imagen obtenida por fetch" />
      ) : (
        <p>Cargando imagen...</p>
      )}
    </div>
  );
}

export default UseFetchImage;
