document.addEventListener("DOMContentLoaded", () => {
      
    // Open forms
    document.getElementById("supply").addEventListener("click", () => {
      document.querySelector(".supplier").style.display = "block";
    });
  
    document.getElementById("rider").addEventListener("click", () => {
      document.querySelector(".rider").style.display = "block";
    });
  
    document.getElementById("warehouse").addEventListener("click", () => {
      document.querySelector(".warehouse").style.display = "block";
    });
  
    // Close forms
    document.querySelector(".close").addEventListener("click", () => {
      document.querySelector(".supplier").style.display = "none";
    });
  
    document.querySelector(".two").addEventListener("click", () => {
      document.querySelector(".rider").style.display = "none";
    });
  
    document.querySelector(".three").addEventListener("click", () => {
      document.querySelector(".warehouse").style.display = "none";
    });
  
    // fibo form submission
    const fiboForm = document.querySelector("form.fibo");
    fiboForm.addEventListener("submit", e => {
      e.preventDefault();
      sendFormData(fiboForm, "https://delivery-foodsurplus.up.railway.app/website/load_new/fibonibo");
    });

    // Supplier form submission
    const supplierForm = document.querySelector("form.supplier");
    supplierForm.addEventListener("submit", e => {
      e.preventDefault();
      sendFormData(supplierForm, "https://delivery-foodsurplus.up.railway.app/website/load_new/supplier");
    });
  
    // Rider form submission
    const riderForm = document.querySelector("form.rider");
    riderForm.addEventListener("submit", e => {
      e.preventDefault();
      sendFormData(riderForm, "https://delivery-foodsurplus.up.railway.app/website/load_new/rider");
    });
  
    // Warehouse form submission
    const warehouseForm = document.querySelector("form.warehouse");
    warehouseForm.addEventListener("submit", e => {
      e.preventDefault();
      sendFormData(warehouseForm, "https://delivery-foodsurplus.up.railway.app/website/load_new/warehouse");
    });
  
    // Function to send form data
    function sendFormData(form, url) {
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });
  
      fetch(url, {
        method: "POST",
        headers: {
          "accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(result => {
        console.log("Server response:", result);
        alert("Form submitted successfully!");
        form.reset();
        form.style.display = "none"; // hide form after submit
      })
      .catch(error => {
        console.error("Error:", error);
        alert("Something went wrong!");
      });
    }
  });