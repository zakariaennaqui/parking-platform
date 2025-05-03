# 🚗 Plateforme de Gestion de Parking – React

Une application web pour gérer les utilisateurs d'un parking avec enregistrement, identification par ID, statut de paiement, et interface admin sécurisée.

## 🎯 Objectif

Cette plateforme permet :

- Aux utilisateurs de s'inscrire avec nom et matricule
- De recevoir automatiquement un ID unique
- De se connecter avec leur ID et voir s'ils ont payé
- D'effectuer un paiement local (simulé)
- À un administrateur (protégé par mot de passe) d'ajouter, supprimer et consulter tous les utilisateurs

---

## 🧱 Fonctionnalités

- ✅ Enregistrement et génération automatique d’un ID
- ✅ Identification via l’ID
- ✅ Paiement local simulé
- ✅ Interface admin protégée par mot de passe (`admin`)
- ✅ Ajout et suppression d’utilisateurs (CRUD)
- ✅ Stockage persistant avec `localStorage`
- ✅ Déployé sur Vercel

---

## 🛠️ Technologies utilisées

- [React.js](https://reactjs.org/) (v18+)
- HTML / CSS
- `localStorage` pour simuler une base de données
- Déploiement via [Vercel](https://vercel.com)

---

## 📁 Structure du projet

- /src
- ├── App.js # Composant principal
- ├── components/
- │ ├── UserForm.js # Formulaire utilisateur
- │ ├── UserInfo.js # Affichage des infos utilisateur
- │ ├── Payment.js # Paiement (simulé)
- │ └── UserList.js # Admin – Liste et gestion des utilisateurs

---

## 🔒 Accès admin

- Mot de passe par défaut : `admin`
- Permet d'accéder à :
  - Liste complète des utilisateurs
  - Formulaire d’ajout d’utilisateur
  - Suppression d’utilisateurs

---

## 🚀 Déploiement

Projet hébergé sur **Vercel** :

> 🔗 [Lien de la démo](https://parking-platform-two.vercel.app)

---

## 🧩 Possibilités d'amélioration

- Authentification sécurisée (email/mot de passe)
- Intégration Firebase ou Supabase
- Paiement réel via Stripe
- Responsive mobile
- Système de notifications

---

## 👨‍💻 Auteur
- 👤 aya benzine
- 🔗 [LinkedIn](https://www.linkedin.com/in/aya-ben-a700a8351/)
- 👤 zakaria ennaqui
- 🔗 [LinkedIn](https://www.linkedin.com/in/zakaria-ennaqui-990883362)
- 💻 [GitHub](https://github.com/zakariaennaqui)

---

## 📜 Licence

Ce projet est sous licence MIT – libre à utiliser, modifier et distribuer.
