# Shopping Cart – Checkpoint DOM 1

Un panier d'achat interactif en JavaScript vanilla avec Bootstrap 5.

## 🚀 Fonctionnement

Trois produits sont affichés (Baskets, Socks, Bag), chacun avec :

- **`+` / `-`** : augmenter ou diminuer la quantité (minimum 0)
- **🗑️ Poubelle** : supprimer le produit du panier
- **❤️ Cœur** : ajouter/retirer des favoris (toggle rouge/noir)
- **Prix total** : mis à jour automatiquement à chaque action

## 📁 Structure

```
checkpoint-DOM1/
├── index.html        # Structure HTML (navbar Bootstrap + cartes produits)
├── style.css         # Mise en forme du panier
├── js/
│   └── script.js     # Logique DOM : quantités, suppression, favoris, total
└── assets/
    ├── baskets.png
    ├── socks.png
    ├── bag.png
    └── delete.png
```

## 🧠 Concepts abordés

- Sélection d'éléments DOM (`querySelectorAll`, `querySelector`, `closest`)
- Gestion d'événements (`addEventListener` sur plusieurs boutons)
- Modification du contenu (`textContent`, `style`, `classList.toggle`)
- Suppression d'un élément du DOM (`element.remove()`)
- Calcul dynamique du prix total

## 🛠️ Stack

- HTML5 / CSS3
- JavaScript vanilla (ES6)
- Bootstrap 5.1.3
- Font Awesome 6

## ▶️ Lancer le projet

Ouvrir `index.html` directement dans un navigateur. Aucune dépendance à installer.
