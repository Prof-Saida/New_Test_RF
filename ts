<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Redirection automatique</title>

<script>
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxRKuFcBtLdX9wEp_jfwBJ5V6tmM5PDRU2E_jFT-bZoyxJwHzLqw7_uLPnhtam-WLCz/exec";

  // --- Générer ou récupérer un ID utilisateur ---
  const email  = data["Adresse e-mail"] || data["Email"];
  let userId = e.parameter.userId || "Unknown";

  // --- Vérifier le dernier formulaire global ---
  const lastRow = sheet.getLastRow();
  let lastType = "F"; // par défaut on commence par A
  if (lastRow > 0) {
    const lastValue = sheet.getRange(lastRow, 2).getValue(); // colonne B = type
    if (["A", "B", "C", "D", "E", "F"].includes(lastValue)) {
      lastType = lastValue;
    }
  }

  // --- Alterner globalement entre A, B, C, D, E, F ---
  let chosenType;
  switch (lastType) {
    case "A":
      chosenType = "B";
      break;
    case "B":
      chosenType = "C";
      break;
    case "C":
      chosenType = "D";
      break;
    case "D":
      chosenType = "E";
      break;
    case "E":
      chosenType = "F";
      break;
    default:
      chosenType = "A";
  }

  // --- Liens des formulaires ---
  const formA = "https://forms.gle/f5SfhpjNyU2hNLTa6";
  const formB = "https://forms.gle/Bggr2miD7K5LBFiM6";
  const formC = "https://forms.gle/GQDMDCCJjFoJNL937";
  const formD = "https://forms.gle/bQUzKVw4qmMAFjY68";
  const formE = "https://forms.gle/bpWjeaE1uHdKBWBd9";
  const formF = "https://forms.gle/y9tb4aF5cbknNLSSA";

  let redirectURL;
  if (chosenType === "A") redirectURL = formA;
  else if (chosenType === "B") redirectURL = formB;
  else if (chosenType === "C") redirectURL = formC;
  else if (chosenType === "D") redirectURL = formD;
  else if (chosenType === "E") redirectURL = formE;
  else redirectURL = formF;

  // --- Enregistrer dans Google Sheet ---
  sheet.appendRow([new Date(), chosenType, Email]);

  // --- Redirection avec stockage du userId ---
  return HtmlService.createHtmlOutput(
    "<html><head><meta name='viewport' content='width=device-width, initial-scale=1'>" +
    "<script>" +
    "let uid = localStorage.getItem('Email');" +
    "if (!uid) {" +
    "  uid = 'U' + Math.random().toString(36).substr(2, 9);" +
    "  localStorage.setItem('Email', uid);" +
    "}" +
    "window.location='" + redirectURL + "?Email=' + uid;" +
    "</script>" +
    "</head><body style='font-family:Arial; text-align:center; padding:50px;'>" +
    "<p>Redirection en cours vers le formulaire " + chosenType + "...</p>" +
    "</body></html>"
  );

</script>

</head>

<body style="text-align:center; font-family:Arial; margin-top:100px;">
  <p>Redirection en cours…</p>
</body>
</html>

//////////////////////////////////////////
