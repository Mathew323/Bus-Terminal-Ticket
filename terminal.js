document.getElementById("generate-ticket").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const departure = document.getElementById("departure").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const seat = document.getElementById("seat").value.trim();

  if (!name || !departure || !destination || !date || !seat) {
    alert("Please fill in all fields.");
    return;
  }

  
  document.getElementById("ticket-name").textContent = name;
  document.getElementById("ticket-departure").textContent = departure;
  document.getElementById("ticket-destination").textContent = destination;
  document.getElementById("ticket-date").textContent = date;
  document.getElementById("ticket-seat").textContent = seat;

  
  document.getElementById("ticket").classList.remove("hidden");
  document.getElementById("ticket-form").classList.add("hidden");
});

document.getElementById("reset-form").addEventListener("click", () => {
  
  document.getElementById("ticket-form").classList.remove("hidden");
  document.getElementById("ticket").classList.add("hidden");
  document.getElementById("ticket-form").reset();
});
