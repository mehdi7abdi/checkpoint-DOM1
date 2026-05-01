// Toutes les cartes produits
const cards = document.querySelectorAll(".card-body .card");

// Affichage du prix total
const totalDisplay = document.querySelector(".total");

// Prix total global
let grandTotal = 0;

// =============================================
//  Fonction : mettre à jour le prix total
// =============================================
function updateTotal() {
  grandTotal = 0;

  // Pour chaque carte encore présente dans le DOM
  document.querySelectorAll(".card-body .card").forEach((card) => {
    const quantity = parseInt(card.querySelector(".quantity").textContent);
    const unitPriceText = card.querySelector(".unit-price").textContent;
    const unitPrice = parseInt(unitPriceText); // ex: "100 $" -> 100

    grandTotal += quantity * unitPrice;
  });

  totalDisplay.textContent = grandTotal + " $";
}

// =============================================
//  Initialisation de chaque carte produit
// =============================================
cards.forEach((card) => {
  const plusBtn = card.querySelector(".fa-plus-circle");
  const minusBtn = card.querySelector(".fa-minus-circle");
  const deleteBtn = card.querySelector(".fa-trash-alt");
  const heartBtn = card.querySelector(".fa-heart");
  const quantitySpan = card.querySelector(".quantity");

  // ---- Bouton "+" : augmenter la quantité ----
  plusBtn.addEventListener("click", () => {
    let qty = parseInt(quantitySpan.textContent);
    qty++;
    quantitySpan.textContent = qty;
    updateTotal();
  });

  // ---- Bouton "-" : diminuer la quantité (min 0) ----
  minusBtn.addEventListener("click", () => {
    let qty = parseInt(quantitySpan.textContent);
    if (qty > 0) {
      qty--;
      quantitySpan.textContent = qty;
      updateTotal();
    }
  });

  // ---- Bouton poubelle : supprimer la carte ----
  deleteBtn.addEventListener("click", () => {
    // On remonte jusqu'au wrapper .card-body parent
    const cardWrapper = card.closest(".card-body");
    cardWrapper.remove();
    updateTotal();
  });

  // ---- Bouton cœur : aimer / ne plus aimer ----
  heartBtn.addEventListener("click", () => {
    heartBtn.classList.toggle("liked");

    if (heartBtn.classList.contains("liked")) {
      heartBtn.style.color = "#e74c3c"; // rouge
    } else {
      heartBtn.style.color = "black"; // couleur par défaut
    }
  });
});
