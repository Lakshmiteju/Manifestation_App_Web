function saveManifestation() {
    var manifestationText = document.getElementById("manifestationInput").value;
    if (manifestationText.trim() !== "") {
      var manifestationItem = document.createElement("div");
      manifestationItem.classList.add("manifestation-item");
      manifestationItem.textContent = manifestationText;
      document.getElementById("manifestationList").appendChild(manifestationItem);
      document.getElementById("manifestationInput").value = "";
    } else {
      alert("Please write something to manifest.");
    }
  }
  