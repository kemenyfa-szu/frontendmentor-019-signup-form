function ValidateForm() {
  const myForm = document.forms["freeTrial"];
  let error = false;
  let elementsToSet = null;

  console.log(document.getElementById("freeTrial").classList.contains("aaa"));

  for (let formElement of myForm) {
    let errorMessage = "";

    if (["text", "email", "password"].includes(formElement.type)) {
      if (formElement.value == "") {
        console.log(formElement.placeholder);
        errorMessage = formElement.placeholder + " cannot be emtpy";
      }
      if (errorMessage == "" && formElement.type === "email") {
        const emailValidatorRegex =
          /^[a-z]([a-z0-9]*[._-]{0,1}[a-z0-9]+){3,}@[a-z]([a-z0-9]*[-]{0,1}[a-z0-9]+){3,}\.[a-z]{2,4}$/;
        if (!formElement.value.match(emailValidatorRegex)) {
          errorMessage = "Looks like this is not an email";
        }
      }

      elementsToSet = document.getElementsByClassName(formElement.classList[1]);
      if (errorMessage != "") {
        error = true;
        elementsToSet = document.getElementsByClassName(
          formElement.classList[1]
        );
        for (element of elementsToSet) {
          element.classList.add("error");
          console.log(errorMessage);
          if (element.classList.contains("error-text")) {
            element.innerHTML = errorMessage;
          }
        }
      } else {
        for (element of elementsToSet) {
          element.classList.remove("error");
        }
      }
    }
  }

  if (!error) {
    document.getElementById("freeTrial").classList.add("success");
    document.getElementById("success").classList.add("success");
  }

  return false;
}
