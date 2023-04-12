import { useLocation } from 'react-router-dom'

export const ChangeTitle = () => {
    const location = useLocation();
  switch (location.pathname) {
    case "/products":
      document.title = "DG | Products";
      break;
    case "/departements":
      document.title = "DG | Departements";
      break;
    case "/types":
      document.title = "DG | Types";
      break;
    default:
      document.title = "DG | Home";
      break;
  }
}