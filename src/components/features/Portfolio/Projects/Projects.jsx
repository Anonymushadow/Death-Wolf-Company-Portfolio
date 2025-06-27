import { Buscador } from "@components/features/Generic/Buscador/Buscador";
import { Cards } from "@components/features/Generic/Cards/Cards";
import { useModeText } from "@hooks/useModeText";
import { useFiltroDinamico } from "@hooks/useFiltroDinamico";
import { clientsImages } from "@data/common/clientsImages";

export const Projects = () => {
  const text = useModeText("portfolio", "projects");
  const { projects = [], title, placeholder, cta } = text;

  const { busqueda, setBusqueda, filtrados } = useFiltroDinamico(projects);

  return (
    <div className="portfolio__section portfolio__section__projects">
      <Buscador valor={busqueda} onChange={setBusqueda} title={title} placeholder={placeholder} />
      <Cards
        items={filtrados}
        cta={cta}
        getTitle={(item) => item.title}
        getText={(item) => item.text}
        getImage={(item) => clientsImages[item.img]}
        isPack={false}
      />
    </div>
  );
};
