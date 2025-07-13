// document.addEventListener("DOMContentLoaded", () => {
//   const form = document.querySelector(".form-class");
  
//   form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     const email = document.getElementById("id_email").value.trim();
//     const message = document.getElementById("id_message").value.trim();

//     if (!email || !message) {
//       alert("Please fill in both fields.");
//       return;
//     }

//     const params = {
//       user_email: email,
//       message: message,
//     };

//     emailjs.send("service_6ljg487", "template_l3ahtls", params)
//       .then(() => {
//         form.innerHTML = "<div class='success_message'><p>Message has been sent successfully!</p></div>";
//       })
//       .catch((error) => {
//         console.error("EmailJS Error:", error);
//         alert("Failed to send message. Please try again later.");
//       });
//   });
// });


// // the notifications sending func using discord:

// window.addEventListener("DOMContentLoaded", () => {
//   const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
//   const isFromInstagram = window.location.search.includes("fbclid");

//   if (isHomePage || isFromInstagram) {
//     let message = "";

//     if (isFromInstagram) {
//       message = "@everyone New visit on michel.dev from Instagram!";
//     } else {
//       message = "@everyone New visit on michel.dev!";
//     }

//     // ⚠️ TEMPORARY — Replace with your real Discord webhook URL
//     const webhookURL = "https://discord.com/api/webhooks/1385138963156570182/vHxtv5pnHpxux39HfXJ_4m4y4qJ0kflqJ09-5svxJMXli9hbKkO3_KNLEo4UKL1zBogQ";

//     fetch(webhookURL, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       body: JSON.stringify({ content: message })
//     }).catch(err => {
//       console.error("Failed to send Discord message:", err);
//     });
//   }
// });

// hard coded version up there 
//  https://michel-dev-worker.michoar777.workers.dev





// function initFormLogic() {
//   const form = document.querySelector(".form-class");

//   if (form) {
//     form.addEventListener("submit", function (e) {
//       e.preventDefault();

//       const email = document.getElementById("id_email").value.trim();
//       const message = document.getElementById("id_message").value.trim();

//       if (!email || !message) {
//         alert("Please fill in both fields.");
//         return;
//       }

//       fetch("https://michel-dev-worker.michoar777.workers.dev/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, message })
//       })
//         .then(res => {
//           if (!res.ok) throw new Error("Request failed");
//           return res.json();
//         })
//         .then(() => {
//           form.innerHTML = "<div class='success_message'><p>Message has been sent successfully!</p></div>";
//         })
//         .catch(err => {
//           console.error("Worker Error:", err);
//           alert("Failed to send message. Please try again later.");
//         });
//     });
//   }
// }

// function sendVisitNotification() {
//   const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
//   const isFromInstagram = window.location.search.includes("fbclid");

//   if (isHomePage || isFromInstagram) {
//     fetch("https://michel-dev-worker.michoar777.workers.dev/api/notify", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ fromInstagram: isFromInstagram })
//     }).catch(err => {
//       console.error("Discord notify failed:", err);
//     });
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {
//   initFormLogic();
//   sendVisitNotification();
// });

// // 🔄 Re-run form binding after HTMX loads content
// document.body.addEventListener("htmx:afterSettle", () => {
//   initFormLogic();
// });




function initFormLogic() {
  const form = document.querySelector(".form-class");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const email = document.getElementById("id_email").value.trim();
      const message = document.getElementById("id_message").value.trim();

      if (!email || !message) {
        alert("Please fill in both fields.");
        return;
      }

      const params = {
        user_email: email,
        message: message,
      };

      emailjs.send("service_6ljg487", "template_l3ahtls", params)
        .then(() => {
          form.innerHTML = "<div class='success_message'><p>Message has been sent successfully!</p></div>";
        })
        .catch((error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please try again later.");
        });
    });
  }
}

function sendVisitNotification() {
  const isHomePage = window.location.pathname === "/" || window.location.pathname.endsWith("index.html");
  const isFromInstagram = window.location.search.includes("fbclid");

  if (isHomePage || isFromInstagram) {
    fetch("https://michel-dev-worker.michoar777.workers.dev/api/notify", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fromInstagram: isFromInstagram })
    }).catch(err => {
      console.error("Discord notify failed:", err);
    });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initFormLogic();
  sendVisitNotification();
});

document.body.addEventListener("htmx:afterSettle", () => {
  initFormLogic();
});