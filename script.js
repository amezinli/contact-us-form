document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input");

  function focusFunc() {
    this.parentNode.classList.add("focus");
  }

  function blurFunc() {
    if (this.value.trim() === "") {
      this.parentNode.classList.remove("focus");
    }
  }

  inputs.forEach(input => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });
});

function validateForm(event) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    alert("لطفاً تمامی فیلدهای ضروری را پر کنید.");
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("لطفاً یک ایمیل معتبر وارد کنید.");
    return false;
  }

  alert("فرم با موفقیت ارسال شد");
  return true;
}
