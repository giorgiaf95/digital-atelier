# 📸 Guida Visiva Installazione - Digital Atelier

## ⚠️ Errore "Stylesheet is missing" - Spiegazione Visiva

### Struttura Repository

```
digital-atelier/                    ← Repository GitHub
├── src/                           
├── public/
├── package.json
└── wordpress-theme/               ← Cartella con tema WordPress
    ├── README.md
    ├── INSTALLAZIONE.md
    ├── CHECKLIST.md
    ├── CONVERSIONE.md
    ├── TROUBLESHOOTING.md
    └── digital-atelier/           ← ⭐ QUESTA è la cartella del tema!
        ├── style.css              ← File richiesto da WordPress
        ├── index.php              ← File richiesto da WordPress
        ├── functions.php
        ├── header.php
        ├── footer.php
        ├── front-page.php
        └── ...altri file
```

---

## ❌ INSTALLAZIONE SBAGLIATA

### Cosa NON Fare

```
WordPress Installation
└── wp-content/
    └── themes/
        └── wordpress-theme/        ← ❌ SBAGLIATO!
            └── digital-atelier/
                ├── style.css
                └── index.php
```

**Risultato:** WordPress cerca in `themes/wordpress-theme/` ma non trova `style.css` direttamente lì → **Errore: "Stylesheet is missing"**

---

## ✅ INSTALLAZIONE CORRETTA

### Cosa Fare

```
WordPress Installation
└── wp-content/
    └── themes/
        └── digital-atelier/        ← ✅ CORRETTO!
            ├── style.css           ← WordPress trova il file qui!
            ├── index.php
            ├── functions.php
            └── ...altri file
```

**Risultato:** WordPress trova `style.css` direttamente in `themes/digital-atelier/` → **Tema attivato con successo! ✅**

---

## 🛠️ Passo-Passo Installazione Corretta

### Local by Flywheel

```
PASSO 1: Localizza la cartella corretta
┌────────────────────────────────────┐
│ Nel repository clonato:            │
│                                    │
│ digital-atelier/                   │
│ └── wordpress-theme/               │
│     └── digital-atelier/  ← COPIA │
│                             QUESTA │
└────────────────────────────────────┘

PASSO 2: Vai alla cartella themes del tuo sito Local
┌────────────────────────────────────┐
│ Local Sites/                       │
│ └── [nome-tuo-sito]/              │
│     └── app/                       │
│         └── public/                │
│             └── wp-content/        │
│                 └── themes/  ← QUI │
└────────────────────────────────────┘

PASSO 3: Copia/Incolla
┌────────────────────────────────────┐
│ themes/                            │
│ ├── twentytwentyfour/             │
│ └── digital-atelier/  ← INCOLLA   │
│     ├── style.css      QUI        │
│     └── index.php                  │
└────────────────────────────────────┘
```

### cPanel / FTP

```
PASSO 1: Prepara il file ZIP
┌────────────────────────────────────┐
│ Comprimi SOLO digital-atelier:     │
│                                    │
│ digital-atelier.zip                │
│ └── digital-atelier/               │
│     ├── style.css                  │
│     └── index.php                  │
│                                    │
│ NON creare:                        │
│ wordpress-theme.zip  ❌            │
└────────────────────────────────────┘

PASSO 2: Carica via FTP
┌────────────────────────────────────┐
│ public_html/                       │
│ └── wp-content/                    │
│     └── themes/  ← Carica qui     │
│         └── digital-atelier.zip    │
└────────────────────────────────────┘

PASSO 3: Estrai il file
┌────────────────────────────────────┐
│ themes/                            │
│ └── digital-atelier/  ← Estratto  │
│     ├── style.css                  │
│     └── index.php                  │
└────────────────────────────────────┘
```

### WordPress Admin (Upload)

```
PASSO 1: Crea ZIP della cartella CORRETTA
┌────────────────────────────────────┐
│ $ cd wordpress-theme/              │
│ $ zip -r digital-atelier.zip \    │
│   digital-atelier/                 │
│                                    │
│ Risultato:                         │
│ digital-atelier.zip                │
│ └── digital-atelier/               │
│     ├── style.css                  │
│     └── index.php                  │
└────────────────────────────────────┘

PASSO 2: Carica tramite WordPress Admin
┌────────────────────────────────────┐
│ 1. Vai su Aspetto → Temi          │
│ 2. Clicca "Aggiungi nuovo"        │
│ 3. Clicca "Carica tema"           │
│ 4. Scegli digital-atelier.zip     │
│ 5. Clicca "Installa ora"          │
└────────────────────────────────────┘
```

---

## 🔍 Verifica Installazione

### Come Controllare se è Corretto

#### Via File Manager o FTP

```
✅ CORRETTO - Dovresti vedere:

wp-content/themes/digital-atelier/style.css
wp-content/themes/digital-atelier/index.php
wp-content/themes/digital-atelier/functions.php

❌ SBAGLIATO - Se vedi questo:

wp-content/themes/wordpress-theme/digital-atelier/style.css
wp-content/themes/wordpress-theme/README.md
```

#### Via WordPress Admin

```
✅ CORRETTO - Dovresti vedere:

Aspetto → Temi
┌─────────────────────────────────┐
│ Digital Atelier                 │
│ Versione 1.0.0                  │
│ Di Digital Atelier              │
│                                 │
│ [Attiva] [Anteprima]           │
└─────────────────────────────────┘

❌ SBAGLIATO - Se vedi:

Aspetto → Temi
┌─────────────────────────────────┐
│ Cartella rotta o errore         │
│ "Stylesheet is missing"         │
└─────────────────────────────────┘
```

---

## 📋 Checklist Rapida

Prima di attivare il tema, verifica:

```
□ Ho scaricato/clonato il repository
□ Ho individuato la cartella: wordpress-theme/digital-atelier/
□ Ho copiato SOLO digital-atelier (non wordpress-theme)
□ La cartella è in: wp-content/themes/digital-atelier/
□ Il file wp-content/themes/digital-atelier/style.css esiste
□ Il file wp-content/themes/digital-atelier/index.php esiste
□ PHP versione >= 8.0
□ WordPress versione >= 6.0
```

Se tutti i punti sono verificati: ✅ Tema pronto per l'attivazione!

---

## 🎯 Riassunto

### In 3 Frasi

1. **Trova** la cartella `digital-atelier` dentro `wordpress-theme/`
2. **Copia** SOLO `digital-atelier/` in `wp-content/themes/`
3. **Attiva** il tema da WordPress Admin → Aspetto → Temi

### La Regola d'Oro

```
🎯 Copia SOLO digital-atelier/
   NON wordpress-theme/
```

---

## 🆘 Serve Aiuto?

Se dopo aver seguito questa guida vedi ancora l'errore:

1. Leggi: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
2. Verifica: [CHECKLIST.md](CHECKLIST.md)
3. Consulta: [INSTALLAZIONE.md](INSTALLAZIONE.md)

---

**Fatto! Ora sei pronto per usare il tema Digital Atelier! 🎉**
