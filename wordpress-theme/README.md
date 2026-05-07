# 🎨 Digital Atelier - Tema WordPress

**Conversione completa del prototipo Lovable in tema WordPress professionale**

---

## ⚠️ ATTENZIONE: Errore "Stylesheet is missing"

**Se vedi questo errore, stai caricando la cartella sbagliata!**

### 🎯 Cartella CORRETTA da Caricare

Devi caricare SOLO la cartella **`digital-atelier`** (che si trova dentro `wordpress-theme/`), NON la cartella `wordpress-theme` stessa!

```
❌ SBAGLIATO: themes/wordpress-theme/
✅ CORRETTO:  themes/digital-atelier/
```

📖 **Vedi la guida completa**: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)

---

## 📖 Documentazione Disponibile

Questa cartella contiene la conversione completa del prototipo "Digital Atelier" da Lovable (React/Vite) a WordPress.

### 📚 Guide Disponibili

1. **[INSTALLAZIONE.md](INSTALLAZIONE.md)** 🚀
   - Guida rapida in Italiano per iniziare
   - Istruzioni per Local by Flywheel
   - Istruzioni per installazione su server
   - Configurazione iniziale

2. **[CHECKLIST.md](CHECKLIST.md)** ✅
   - Checklist completa per setup
   - Passo-passo dalla installazione al deploy
   - Perfetto per chi vuole una guida pratica

3. **[CONVERSIONE.md](CONVERSIONE.md)** 🔄
   - Documentazione tecnica della conversione
   - Differenze tra Lovable e WordPress
   - Architettura del tema
   - Per sviluppatori

4. **[TROUBLESHOOTING.md](TROUBLESHOOTING.md)** 🔧
   - Soluzioni per errore "Stylesheet is missing"
   - Problemi comuni e soluzioni
   - Checklist verifica installazione
   - Debug e risoluzione problemi

5. **[digital-atelier/README.md](digital-atelier/README.md)** 📋
   - Documentazione completa del tema
   - Personalizzazioni e configurazioni
   - Plugin consigliati
   - Troubleshooting

---

## 🚀 Quick Start

### Metodo 1: Local by Flywheel (Consigliato per sviluppo locale)

```bash
# 1. Installa Local da https://localwp.com/
# 2. Crea nuovo sito WordPress in Local
# 3. Copia la cartella del tema

cp -r digital-atelier ~/Local Sites/[nome-sito]/app/public/wp-content/themes/

# 4. Vai su wp-admin → Aspetto → Temi → Attiva "Digital Atelier"
```

### Metodo 2: Server Web / cPanel

```bash
# 1. Comprimi la cartella digital-atelier
# 2. Carica su server via FTP in /wp-content/themes/
# 3. Estrai il file ZIP
# 4. Attiva da wp-admin
```

---

## 📦 Contenuto del Tema

### Template WordPress
```
digital-atelier/
├── style.css                    # Stili e metadata tema
├── functions.php                # Setup e funzionalità
├── header.php                   # Header con navigazione
├── footer.php                   # Footer completo
├── front-page.php              # Homepage con hero
├── index.php                    # Archivio blog
├── single.php                   # Singolo articolo
├── page.php                     # Pagina generica
├── archive-portfolio.php        # Archivio portfolio
├── single-portfolio.php         # Singolo progetto
├── template-contatti.php        # Pagina contatti
├── js/main.js                   # JavaScript
└── assets/images/               # Immagini tema
```

### Funzionalità Incluse
✅ Custom Post Type "Portfolio"
✅ Custom Taxonomy "Portfolio Category"
✅ Menu responsive con mobile overlay
✅ Widget areas (sidebar e footer)
✅ Supporto immagini in evidenza
✅ Commenti integrati
✅ Share buttons social
✅ SEO-friendly
✅ Completamente responsive
✅ Dark theme design
✅ Back to top button

---

## 🎯 Cosa Fare Dopo l'Installazione

### 1️⃣ Configurazione Base
- Imposta homepage statica (Impostazioni → Lettura)
- Crea menu di navigazione (Aspetto → Menu)
- Carica logo personalizzato (Aspetto → Personalizza)

### 2️⃣ Crea Pagine
- Home (homepage)
- Web Design, Modelli 3D, Grafiche 2D, Game Design, Narrative Design
- Contatti (usa template "Contatti")
- Blog (pagina articoli)

### 3️⃣ Aggiungi Contenuti
- Crea categorie portfolio
- Aggiungi progetti portfolio
- Scrivi articoli blog

### 4️⃣ Plugin Consigliati (Opzionali)
- **Advanced Custom Fields (ACF)** - Per campi portfolio personalizzati
- **Contact Form 7** - Per form contatti
- **Yoast SEO** - Per ottimizzazione SEO

---

## 💻 Sviluppo con VS Code

### Estensioni Consigliate
- PHP Intelephense
- WordPress Snippets
- Prettier
- ESLint

### Workflow di Sviluppo
```bash
# 1. Apri la cartella del tema in VS Code
code digital-atelier/

# 2. Modifica i file necessari
# 3. Testa in Local by Flywheel
# 4. Commit e push delle modifiche
```

---

## 🎨 Personalizzazioni Comuni

### Modificare i Colori
Edita `style.css` e modifica le variabili CSS:
```css
:root {
  --color-primary: hsl(38, 85%, 55%);      /* Arancione */
  --color-accent: hsl(12, 75%, 55%);       /* Rosso */
  --color-background: hsl(30, 10%, 7%);    /* Nero */
}
```

### Cambiare Font
Edita l'import in `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

### Modificare Menu
WordPress Admin → Aspetto → Menu

### Aggiungere Widget
WordPress Admin → Aspetto → Widget

---

## 🆘 Supporto

### Problemi Comuni

**Il tema non si attiva**
- Verifica PHP >= 8.0
- Controlla tutti i file siano presenti

**Stili non caricano**
- Svuota cache (Impostazioni → Permalink → Salva)
- Pulisci cache browser

**Menu mobile non funziona**
- Verifica file `js/main.js` presente
- Controlla console browser

### Dove Trovare Aiuto
- Consulta [README.md](digital-atelier/README.md) per documentazione dettagliata
- Leggi [INSTALLAZIONE.md](INSTALLAZIONE.md) per guida passo-passo
- Usa [CHECKLIST.md](CHECKLIST.md) per non dimenticare nessun passaggio

---

## 📄 Requisiti

- **WordPress**: 6.0 o superiore
- **PHP**: 8.0 o superiore
- **MySQL**: 5.7 o superiore

---

## 📊 Statistiche Progetto

- **File Creati**: 21+ files
- **Righe di Codice**: ~3,600+ lines
- **Template WordPress**: 11 template files
- **Asset Immagini**: 6 immagini
- **Documentazione**: 4 guide complete

---

## 🌟 Caratteristiche

### Design
- ✨ Tema scuro moderno
- 📱 Completamente responsive
- 🎨 Colori personalizzabili
- 🖼️ Supporto immagini ottimizzato

### Funzionalità
- 📰 Sistema blog completo
- 🎯 Portfolio con filtri
- 📧 Pagina contatti
- 🔍 SEO-friendly
- ♿ Accessibile

### Performance
- ⚡ Codice ottimizzato
- 🖼️ Lazy loading immagini
- 📦 CSS/JS minificabili
- 🚀 Pronto per caching

---

## 📝 Licenza

GNU General Public License v2 or later

---

## 👥 Credits

- **Design Originale**: Prototipo Lovable
- **Conversione WordPress**: Digital Atelier Team
- **Font**: Google Fonts (Space Grotesk, Inter)
- **Icons**: Inline SVG

---

## 🚀 Inizia Ora!

1. Leggi [INSTALLAZIONE.md](INSTALLAZIONE.md)
2. Segui [CHECKLIST.md](CHECKLIST.md)
3. Personalizza il tema
4. Aggiungi i tuoi contenuti
5. Pubblica il tuo portfolio!

---

**Made with ❤️ for Digital Atelier**

*Convertito da prototipo Lovable a tema WordPress professionale*
