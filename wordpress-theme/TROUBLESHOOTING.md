# 🔧 Risoluzione Problemi - Digital Atelier Theme

## ❌ Errore: "Stylesheet is missing" (Foglio di stile mancante)

Questo è l'errore più comune durante l'installazione del tema. Ecco come risolverlo:

### 🎯 Causa Principale

L'errore "Stylesheet is missing" si verifica quando:
1. **Hai caricato la cartella sbagliata** (più comune)
2. Il file `style.css` non è nella posizione corretta
3. Problemi di permessi file

---

## ✅ Soluzione Rapida

### Problema: Cartella Sbagliata Caricata

**❌ SBAGLIATO - NON fare così:**
```
wp-content/themes/
└── wordpress-theme/          ← SBAGLIATO!
    └── digital-atelier/
        ├── style.css
        └── functions.php
```

**✅ CORRETTO - Fai così:**
```
wp-content/themes/
└── digital-atelier/          ← CORRETTO!
    ├── style.css
    └── functions.php
```

### 🛠️ Come Correggere

#### Opzione 1: Local by Flywheel

1. Apri Local e vai al tuo sito
2. Clicca su "Go to site folder"
3. Naviga in: `app/public/wp-content/themes/`
4. **ASSICURATI** di copiare solo la cartella `digital-atelier` (non `wordpress-theme`)
5. La struttura finale deve essere:
   ```
   themes/
   └── digital-atelier/
       ├── style.css          ← deve essere qui!
       ├── index.php
       ├── functions.php
       └── ...altri file
   ```

#### Opzione 2: cPanel / FTP

1. Vai su `public_html/wp-content/themes/`
2. Carica **SOLO** la cartella `digital-atelier`
3. NON caricare la cartella `wordpress-theme`
4. Verifica che `style.css` sia direttamente in `themes/digital-atelier/style.css`

#### Opzione 3: WordPress Admin (Upload)

1. **IMPORTANTE**: Devi comprimere la cartella GIUSTA
2. Comprimi SOLO `digital-atelier/` in un file ZIP
   ```bash
   # Dalla cartella wordpress-theme, esegui:
   cd wordpress-theme/
   zip -r digital-atelier.zip digital-atelier/
   ```
3. Vai su WordPress Admin → Aspetto → Temi → Aggiungi nuovo → Carica tema
4. Seleziona il file `digital-atelier.zip`
5. Clicca "Installa ora"

---

## 🔍 Verifica Installazione

### Controlla la Struttura File

Dopo l'installazione, verifica che la struttura sia corretta:

**Via FTP o File Manager:**
```
wp-content/themes/digital-atelier/
├── style.css              ← DEVE esistere qui!
├── index.php              ← DEVE esistere qui!
├── functions.php
├── header.php
├── footer.php
├── front-page.php
├── single.php
├── page.php
├── archive-portfolio.php
├── single-portfolio.php
├── template-contatti.php
├── js/
│   └── main.js
├── assets/
│   └── images/
└── README.md
```

### Controlla via SSH o Terminal

Se hai accesso SSH:

```bash
# Vai nella cartella themes
cd /path/to/wordpress/wp-content/themes/

# Verifica che digital-atelier esista
ls -la digital-atelier/

# Verifica che style.css esista
ls -la digital-atelier/style.css

# Mostra le prime righe di style.css per verificare le intestazioni
head -n 20 digital-atelier/style.css
```

**Output corretto dovrebbe mostrare:**
```css
@charset "UTF-8";
/*
Theme Name: Digital Atelier
Theme URI: https://github.com/giorgiaf95/digital-atelier
Author: Digital Atelier
...
```

---

## 🔧 Altri Problemi Comuni

### Errore: "The parent theme is missing"

**Soluzione**: Digital Atelier NON è un tema child. Se vedi questo errore, hai confuso con un altro tema.

### Errore: "Parse error" o "Fatal error"

**Causa**: Versione PHP non compatibile

**Soluzione**: 
1. Verifica versione PHP: deve essere >= 8.0
2. In cPanel: Software → Select PHP Version → Scegli 8.0 o superiore
3. In Local: Preferences → Preferred PHP version → 8.0+

### Il tema si attiva ma non si vede correttamente

**Soluzione**:
1. Vai su Impostazioni → Permalink
2. Clicca "Salva modifiche" (anche senza cambiare nulla)
3. Svuota cache browser (Ctrl+Shift+R o Cmd+Shift+R)
4. Svuota cache WordPress se usi plugin di cache

### Immagini o stili non si caricano

**Soluzione**:
1. Verifica permessi file:
   - Cartelle: 755
   - File: 644
2. Esegui da SSH:
   ```bash
   cd wp-content/themes/digital-atelier
   find . -type d -exec chmod 755 {} \;
   find . -type f -exec chmod 644 {} \;
   ```

---

## 📋 Checklist Installazione Corretta

Prima di attivare il tema, verifica:

- [ ] Ho caricato la cartella `digital-atelier` (NON `wordpress-theme`)
- [ ] Il file `style.css` è in `themes/digital-atelier/style.css`
- [ ] Il file `index.php` è in `themes/digital-atelier/index.php`
- [ ] La versione PHP è >= 8.0
- [ ] La versione WordPress è >= 6.0
- [ ] I permessi file sono corretti (755 per cartelle, 644 per file)

---

## 🆘 Ancora Problemi?

### Debug Mode

Attiva il debug WordPress per vedere errori dettagliati:

1. Apri `wp-config.php`
2. Trova questa riga:
   ```php
   define('WP_DEBUG', false);
   ```
3. Cambiala in:
   ```php
   define('WP_DEBUG', true);
   define('WP_DEBUG_LOG', true);
   define('WP_DEBUG_DISPLAY', false);
   ```
4. Controlla il file `wp-content/debug.log` per errori

### File Corrotti

Se il file style.css risulta corrotto:

1. Scarica nuovamente il tema dal repository
2. Rimuovi la vecchia cartella `digital-atelier` da `wp-content/themes/`
3. Carica la nuova cartella
4. Riattiva il tema

### Conflitti con Altri Plugin/Temi

1. Disattiva temporaneamente tutti i plugin
2. Attiva il tema Digital Atelier
3. Riattiva i plugin uno alla volta per identificare conflitti

---

## 📞 Supporto

Se dopo aver provato tutte queste soluzioni il problema persiste:

1. Controlla che stai usando i file dalla cartella corretta:
   - Repository: `wordpress-theme/digital-atelier/`
   - NON usare: `wordpress-theme/` da sola
   
2. Verifica requisiti minimi:
   - WordPress 6.0+
   - PHP 8.0+
   - MySQL 5.7+

3. Consulta:
   - `wordpress-theme/INSTALLAZIONE.md` per istruzioni dettagliate
   - `wordpress-theme/CHECKLIST.md` per setup passo-passo
   - `wordpress-theme/digital-atelier/README.md` per documentazione completa

---

## ✅ Soluzione Veloce (TL;DR)

```bash
# 1. Vai nella cartella wordpress-theme
cd /path/to/repository/wordpress-theme/

# 2. Copia SOLO la cartella digital-atelier
cp -r digital-atelier /path/to/wordpress/wp-content/themes/

# 3. Verifica installazione
ls -la /path/to/wordpress/wp-content/themes/digital-atelier/style.css

# 4. Se vedi il file, vai su wp-admin e attiva il tema
```

**Ricorda**: Carica SOLO `digital-atelier/`, NON `wordpress-theme/`! 🎯
