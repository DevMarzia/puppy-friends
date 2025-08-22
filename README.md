# Puppy Friends - Rifugio per Animali 🐾

Puppy Friends è un'applicazione web dedicata ai rifugi per animali. L'obiettivo è semplificare il processo di adozione e migliorare la gestione degli animali ospitati.

---

## Panoramica del Progetto

La web app nasce con lo scopo di creare una piattaforma di adozioni cuccioli, con un approccio mobile first.
Il progetto Puppy Friends non è un clone ma un prototipo inedito sia lato brand che UI/UX, basato su un'idea personale che mi è piaciuta particolarmente.

### Utenti Ospiti / Registrati

- Navigazione nel sito
- Registrazione e login
- Visualizzazione dei cuccioli disponibili
- Invio di richieste di adozione tramite un modulo dedicato

### Amministratore

- Tutte le funzionalità dell'utente
- Accesso a una **dashboard privata** ("Gestione Cuccioli")
- Operazioni **CRUD** complete (Create, Read, Update, Delete) sui dati dei cuccioli

> Il backend e la persistenza dei dati sono simulati tramite **`json-server`**, che agisce come API REST fittizia su file `db.json`.

---

## Struttura del Progetto

L'architettura del progetto è organizzata come segue, per separare in modo chiaro le diverse responsabilità dell'applicazione:

```text
puppy-friends/
├── public/
├── src/
│   ├── assets/               
│   ├── components/           
│   ├── pages/                
│   └── Redux/                
│       ├── auth/ 
│       ├── puppies/ 
│       └── store.js 
│   ├── App.css 
│   ├── App.jsx 
│   ├── index.css 
│   └── main.jsx 
├── .gitignore
├── db.json                   
├── eslint.config.js 
├── index.html 
├── package.json 
├── README.md
└── vite.config.js
```

---

## Funzionalità

### Utente

- **Autenticazione Simulata**: Sistema di login simulato 
- **Visualizzazione Cuccioli**: Una pagina con tutti gli animali disponibili, con foto, dettagli e descrizione.
- **Richiesta di Adozione**: Modulo per inviare una richiesta di adozione per un cucciolo specifico.

### Admin

- **Accesso Privato**: Pagina di gestione cuccioli accessibile solo all'admin.
- **Aggiungi Cucciolo**: Inserimento di un nuovo animale nel sistema.
- **Modifica Dati**: Aggiornamento delle informazioni di un cucciolo esistente (es. nome, età, descrizione).
- **Rimuovi Cucciolo**: Cancellazione di un cucciolo dalla lista (es. in caso di adozione).
- **Visualizzazione completa**: Accesso a tutti i dati dei cuccioli presenti.

---

## Tecnologie Utilizzate

- **Framework**: React
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **State Management**: Redux Toolkit
- **Gestione Form**: React Hook Form
- **Chiamate HTTP**: Axios
- **Invio Email (Notifiche Richiesta Adozione)**: EmailJS
- **Icone**: React Icons
- **Mappe Interattive**: Leaflet & React Leaflet
- **Backend Simulato**: json-server

---

## Istruzioni per l'esecuzione

Assicurati di avere [Node.js] installato.

### Installa le Dipendenze

Installa tutte le librerie e i pacchetti necessari menzionati in **Tecnologie Utilizzate**:

```bash
npm install
```

Avvia il server

```bash
npm run server
```

Avvia l'applicazione

```bash
npm run dev
```

---

## Credenziali di Accesso

### Accesso Utenti Applicazione

- **Admin**:
  - **Email**: `admin@example.com`
  - **Password**: `admin123`

- **Utente Standard**:
  - **Email**: `user@example.com`
  - **Password**: `user123`

### Casella Email per Notifiche Adozione

Questo è l'account email dove vengono recapitate le richieste di adozione inviate tramite il form dell'applicazione (configurato con EmailJS).

- **Email**: `puppyfriends29@gmail.com`
- **Password**: `Puppy.29`