document.getElementById("subscription-form").addEventListener("submit", (event) => {
  event.preventDefault();

  const emailInput = document.getElementById("email");
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const warning = document.getElementById("warning");
  const success = document.getElementById("success");

  if(email === "" || !emailPattern.test(email)) {
    warning.classList.remove("hidden");
    emailInput.focus();
    return false;
  } else {
    warning.classList.add("hidden");
    success.classList.remove("hidden");
    emailInput.value = "";
  }
});