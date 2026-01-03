<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Form Redirect</title>
<script>
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby0rq2_oHjRsd7NoogHil-7UO7La23A_XMFf8-TaKrG4linz_PmRFvA45rFufobwY9-/exec";

/* USER ID */
let userId = localStorage.getItem("userId");
if (!userId) {
  userId = "U" + Math.random().toString(36).substr(2, 9);
  localStorage.setItem("userId", userId);
}

/* LAST TYPE */
let lastType = localStorage.getItem("lastType");

/* NEXT FORM */
let chosenType;
switch (lastType) {
  case "A": chosenType = "B"; break;
  case "B": chosenType = "C"; break;
  case "C": chosenType = "D"; break;
  case "D": chosenType = "E"; break;
  case "E": chosenType = "F"; break;
  default:  chosenType = "A";
}

/* SAVE STATE */
localStorage.setItem("lastType", chosenType);

/* FORMS */
const forms = {
  A: "https://forms.gle/f5SfhpjNyU2hNLTa6",
  B: "https://forms.gle/Bggr2miD7K5LBFiM6",
  C: "https://forms.gle/GQDMDCCJjFoJNL937",
  D: "https://forms.gle/bQUzKVw4qmMAFjY68",
  E: "https://forms.gle/bpWjeaE1uHdKBWBd9",
  F: "https://forms.gle/y9tb4aF5cbknNLSSA"
};

/* Afficher le type */
document.getElementById("t").innerText = chosenType;

/* 🔥 TRACKING AVEC IMAGE (méthode la plus fiable) */
const img = new Image();
img.onload = function() {
  console.log("✅ Tracking réussi");
  // Redirection après confirmation
  setTimeout(function() {
    window.location.href = forms[chosenType] + "?userId=" + userId;
  }, 100);
};

img.onerror = function() {
  console.log("⚠️ Erreur de tracking, redirection quand même");
  // Redirection même en cas d'erreur après un délai
  setTimeout(function() {
    window.location.href = forms[chosenType] + "?userId=" + userId;
  }, 500);
};

// Délai maximum avant redirection (sécurité)
setTimeout(function() {
  window.location.href = forms[chosenType] + "?userId=" + userId;
}, 2000);

// Lancer le tracking
img.src = SCRIPT_URL +
  "?formType=" + encodeURIComponent(chosenType) +
  "&userId=" + encodeURIComponent(userId) +
  "&t=" + Date.now(); // Éviter le cache

</script>
</head>
<body style="font-family:Arial; text-align:center; padding:50px;">
  <p>Redirecting to form <strong id="t">...</strong></p>
</body>
</html>
