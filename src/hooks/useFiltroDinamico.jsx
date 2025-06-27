import { useState, useMemo } from "react";

export const useFiltroDinamico = (items = [], dir = "title") => {
  const [busqueda, setBusqueda] = useState("");

  const filtrados = useMemo(() => {
    // Si la busqueda es un string vacio entonces devolvemos todos los items, como un reset de filtro
    if (!busqueda) return items;

    // Filtramos los items segun la busqueda
    return items.filter((item) => {
      const valor = item?.[dir];
      return typeof valor === "string" && valor.toLowerCase().includes(busqueda.toLowerCase());
    });
  }, [busqueda, items, dir]);

  return { busqueda, setBusqueda, filtrados };
};
