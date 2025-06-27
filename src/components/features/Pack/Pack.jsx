import { Buscador } from "@components/features/Generic/Buscador/Buscador";
import { Cards } from "@components/features/Generic/Cards/Cards";
import { useModeText } from "@hooks/useModeText";
import { useFiltroDinamico } from "@hooks/useFiltroDinamico";
import { clientsImages } from "@data/common/clientsImages";

export const Pack = () => {
  const text = useModeText("pack");
  const { manada = [], title, placeholder, cta } = text;

  const { busqueda, setBusqueda, filtrados } = useFiltroDinamico(
    manada,
    "enterprise"
  );

  return (
    <>
      <Buscador valor={busqueda} onChange={setBusqueda} title={title} placeholder={placeholder} />
      <Cards
        items={filtrados}
        cta={cta}
        getTitle={(item) => item.enterprise}
        getText={(item) => item.text}
        getImage={(item) => clientsImages[item.img]}
        isPack={true}
      />
    </>
  );
};
