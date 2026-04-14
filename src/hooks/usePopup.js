import { useState } from "react";

export function usePopup() {
  const [popup, setPopup] = useState(null);
  const openPopup = (config) => setPopup(config);
  const closePopup = () => setPopup(null);
  return { popup, openPopup, closePopup };
}