const formatType = (type: string): string => {
  let color: string = "";

  switch (type) {
    case "Feu":
      color = "red ";
      break;
    case "Eau":
      color = "blue ";
      break;
    case "Plante":
      color = "green ";
      break;
    case "Insecte":
      color = "brown ";
      break;
    case "Normal":
      color = "grey lighten-3";
      break;
    case "Vol":
      color = "blue lighten-3";
      break;
    case "Poison":
      color = "deep-purple accent-1";
      break;
    case "Fée":
      color = "pink lighten-4";
      break;
    case "Psy":
      color = "deep-purple darken-2";
      break;
    case "Electrik":
      color = "lime accent-1";
      break;
    case "Combat":
      color = "deep-orange";
      break;
    default:
      color = "grey";
      break;
  }

  return `chip ${color}`;
};

export default formatType
