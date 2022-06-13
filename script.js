const error_message = document.querySelector(".error");
const email = document.querySelector("#email");
const submit = document.querySelector(".request");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const regex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.value.match(regex)) {
    console.log("ok");
    error_message.classList.add("hide");
  } else {
    error_message.classList.remove("hide");
  }
});
