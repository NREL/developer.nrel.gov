import A11yDialog from "a11y-dialog";
import escapeHtml from "escape-html";
import serialize from "form-serialize";

const defaults = {};
const options = {
  ...defaults,
  ...(window.nrelContactOptions || {}),
};

if (!options.apiKey) {
  alert("nrelContactOptions.apiKey must be set");
}

const modalEl = document.getElementById("alert_modal");
const modalMessageEl = modalEl.querySelector("#alert_modal_message");
const modal = new A11yDialog(modalEl);

const formEl = document.getElementById("nrel_contact_form");
formEl.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!formEl.checkValidity()) {
    formEl.classList.add("was-validated");
    return false;
  }

  const submitButtonEl = formEl.querySelector("button[type=submit]");
  const submitButtonOrig = submitButtonEl.innerHTML;
  setTimeout(() => {
    submitButtonEl.disabled = true;
    submitButtonEl.innerText = "Sending...";
  }, 0);

  const hostname = window.location.hostname;
  const apiHost = (hostname === 'developer.nrel.gov') ? 'developer.nrel.gov' : 'devstage.nrel.gov';

  return fetch(`https://${apiHost}/api/contactor/v1.json?` + new URLSearchParams({
    api_key: options.apiKey,
  }), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(serialize(formEl, { hash: true })),
  })
    .then((response) => {
      const contentType = response.headers.get("Content-Type");
      if (!contentType || !contentType.includes("application/json")) {
        throw new Error("Response is not JSON");
      }

      return response.json().then((data) => ({
        response,
        data,
      }));
    })
    .then(({ response, data }) => {
      if (!response.ok) {
        throw { responseData: data };
      }

      formEl.reset();

      modalMessageEl.innerText =
        "Thanks for sending your message. We'll be in touch.";
      modal.show();
    })
    .catch((error) => {
      const messages = [];
      let messageStr = "";
      try {
        if (error?.responseData?.errors) {
          for (let i = 0; i < error.responseData.errors.length; i += 1) {
            const err = error.responseData.errors[i];
            if (err.full_message || err.message) {
              messages.push(escapeHtml(err.full_message || err.message));
            }
          }
        }

        if (error?.responseData?.error?.message) {
          messages.push(escapeHtml(error.responseData.error.message));
        }

        if (messages.length > 0) {
          messageStr = `<br><ul><li>${messages.join("</li><li>")}</li></ul>`;
        } else {
          console.error(error);
        }
      } catch (e) {
        console.error(e);
      }

      modalMessageEl.innerHTML = `Sending your message unexpectedly failed.${messageStr}<br>Please try again or <a href="${escapeHtml(
        options.issuesUrl,
      )}">file an issue</a> for assistance.`;
      modal.show();
    })
    .finally(() => {
      submitButtonEl.disabled = false;
      submitButtonEl.innerHTML = submitButtonOrig;
    });
});
