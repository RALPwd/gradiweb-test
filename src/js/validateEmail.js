document.getElementById("subscription-form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener el valor del campo de entrada de correo electrónico
  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  // Patrón de validación de correo electrónico utilizando expresiones regulares
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Elementos para mostrar mensajes de advertencia y éxito
  const warning = document.getElementById("warning");
  const success = document.getElementById("success");

  // Validar el correo electrónico
  if (email === "" || !emailPattern.test(email)) {
    // Mostrar mensaje de advertencia si el correo electrónico es inválido
    warning.classList.remove("hidden");
    emailInput.focus();
    return false;
  } else {
    // Ocultar mensaje de advertencia y mostrar mensaje de éxito si el correo electrónico es válido
    warning.classList.add("hidden");
    success.classList.remove("hidden");
    emailInput.value = "";
  }
});