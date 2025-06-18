document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (name && email && message) {
    document.getElementById("response").textContent = `Thank you, ${name}! We'll contact you soon.`;
    this.reset();
  } else {
    document.getElementById("response").textContent = "Please fill out all fields.";
  }
});

function showAlert() {
  const name = document.getElementById("popupName").value.trim();
  const phone = document.getElementById("popupPhone").value.trim();
  const email = document.getElementById("popupEmail").value.trim();
  const captcha = document.getElementById("popupCaptcha").value.trim();

  if (captcha !== "10") {
    alert("Captcha incorrect. Try again.");
    return false;
  }

  alert(`Thank you ${name}! We will reach you at ${phone}`);
  document.getElementById("alertPopup").style.display = "none";
  return false;
}
