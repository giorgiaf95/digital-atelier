# Digital Atelier - WordPress Theme

## Descrizione

Digital Atelier è un tema WordPress moderno e responsive per portfolio e blog, dedicato a servizi creativi digitali. Il tema è stato convertito da un prototipo Lovable e include funzionalità per mostrare servizi di:

- **Web Design** - Siti web moderni e responsive
- **Modelli 3D** - Modellazione 3D per giochi e visualizzazione
- **Grafiche 2D** - Illustrazioni e brand identity
- **Game Design** - Meccaniche di gioco e level design
- **Narrative Design** - Storytelling interattivo

## Caratteristiche

### Funzionalità del Tema
- ✅ Design moderno con tema scuro
- ✅ Completamente responsive (mobile, tablet, desktop)
- ✅ Custom Post Types per Portfolio e Testimonianze
- ✅ Tassonomie personalizzate per categorie portfolio
- ✅ Template dedicati per ogni tipo di pagina
- ✅ Menu di navigazione con supporto mobile
- ✅ Area widget nella sidebar e footer
- ✅ Supporto completo per Featured Images
- ✅ Sistema di commenti integrato
- ✅ Pulsanti di condivisione social
- ✅ SEO-friendly
- ✅ Accessibile (WCAG compliant)

### Template Inclusi
- `front-page.php` - Homepage con hero section e servizi
- `index.php` - Template blog generico
- `single.php` - Template per articoli singoli
- `page.php` - Template per pagine generiche
- `single-portfolio.php` - Template per progetti portfolio
- `archive-portfolio.php` - Archivio portfolio con filtri
- `template-contatti.php` - Template pagina contatti
- `header.php` - Header con navigazione
- `footer.php` - Footer con widget e informazioni

## Installazione

### Requisiti
- WordPress 6.0 o superiore
- PHP 8.0 o superiore
- MySQL 5.7 o superiore

### Metodo 1: Installazione Locale con Local by Flywheel

1. **Installa Local by Flywheel**
   - Scarica e installa [Local](https://localwp.com/)
   - Crea un nuovo sito WordPress

2. **Copia il tema**
   ```bash
   # Naviga nella cartella del tuo sito Local
   cd ~/Local Sites/[nome-tuo-sito]/app/public/wp-content/themes/
   
   # Copia la cartella del tema
   cp -r /path/to/wordpress-theme/digital-atelier ./
   ```

3. **Attiva il tema**
   - Vai su `wp-admin` del tuo sito locale
   - Aspetto → Temi
   - Attiva "Digital Atelier"

### Metodo 2: Installazione Manuale

1. **Download del tema**
   - Scarica la cartella `wordpress-theme/digital-atelier`
   - Comprimi la cartella in un file ZIP (opzionale)

2. **Carica il tema**
   - Via FTP: Carica la cartella in `/wp-content/themes/`
   - Via Admin: Aspetto → Temi → Aggiungi nuovo → Carica tema

3. **Attiva il tema**
   - Aspetto → Temi → Attiva "Digital Atelier"

## Configurazione Iniziale

### 1. Imposta la Homepage Statica

1. Vai su **Impostazioni → Lettura**
2. Seleziona "Una pagina statica"
3. Crea una nuova pagina chiamata "Home" e selezionala come "Homepage"
4. Crea una pagina "Blog" e selezionala come "Pagina articoli"

### 2. Configura i Menu

1. Vai su **Aspetto → Menu**
2. Crea un nuovo menu chiamato "Menu Principale"
3. Aggiungi le seguenti voci:
   - Home
   - Web Design (pagina personalizzata)
   - Modelli 3D (pagina personalizzata)
   - Grafiche 2D (pagina personalizzata)
   - Game Design (pagina personalizzata)
   - Narrative Design (pagina personalizzata)
   - News (link a /news)
   - Contatti (pagina con template "Contatti")
4. Assegna il menu a "Menu Principale"

### 3. Crea le Pagine dei Servizi

Crea pagine per ogni servizio con i seguenti slug:
- `/web-design`
- `/modelli-3d`
- `/grafiche-2d`
- `/game-design`
- `/narrative-design`

### 4. Configura la Pagina Contatti

1. Crea una nuova pagina chiamata "Contatti"
2. Seleziona il template "Contatti" dal menu Template della pagina
3. Opzionale: Installa un plugin per form di contatto come:
   - Contact Form 7
   - WPForms
   - Gravity Forms

   Poi aggiungi lo shortcode del form nel contenuto della pagina.

### 5. Aggiungi Progetti Portfolio

1. Vai su **Portfolio → Aggiungi Nuovo**
2. Compila i campi:
   - Titolo del progetto
   - Descrizione completa
   - Immagine in evidenza (obbligatoria)
   - Categoria (Web Design, 3D, 2D, etc.)
3. Campi personalizzati (da aggiungere manualmente o con plugin come ACF):
   - `client` - Nome del cliente
   - `project_date` - Data del progetto
   - `project_url` - URL del progetto live
   - `technologies` - Tecnologie utilizzate
   - `gallery` - Galleria di immagini

### 6. Configura le Categorie Portfolio

1. Vai su **Portfolio → Categorie Portfolio**
2. Crea le seguenti categorie:
   - Web Design
   - Modelli 3D
   - Grafiche 2D
   - Game Design
   - Narrative Design

### 7. Widget del Footer

1. Vai su **Aspetto → Widget**
2. Aggiungi widget nell'area "Footer"
3. Widget suggeriti:
   - Menu di navigazione
   - Testo personalizzato
   - Articoli recenti
   - Social media links

## Plugin Consigliati

### Essenziali
- **Advanced Custom Fields (ACF)** - Per campi personalizzati portfolio
- **Contact Form 7** - Per form di contatto
- **Yoast SEO** - Per ottimizzazione SEO

### Opzionali
- **Elementor** - Page builder per personalizzazioni avanzate
- **WP Rocket** - Caching e ottimizzazione performance
- **Wordfence Security** - Sicurezza del sito
- **Smush** - Ottimizzazione immagini
- **UpdraftPlus** - Backup automatici

## Personalizzazione

### Colori del Tema

I colori sono definiti in `style.css` con CSS custom properties:

```css
:root {
  --color-background: hsl(30, 10%, 7%);     /* Sfondo principale */
  --color-foreground: hsl(40, 15%, 92%);    /* Testo principale */
  --color-primary: hsl(38, 85%, 55%);       /* Colore primario (arancione) */
  --color-secondary: hsl(30, 8%, 16%);      /* Colore secondario */
  --color-accent: hsl(12, 75%, 55%);        /* Colore accento */
}
```

Per modificare i colori, puoi:
1. Editare direttamente `style.css`
2. Usare un plugin come "Simple Custom CSS"
3. Creare un tema child

### Logo Personalizzato

1. Vai su **Aspetto → Personalizza → Identità del sito**
2. Carica il tuo logo
3. Dimensioni consigliate: 400x100px (formato PNG trasparente)

### Font Personalizzati

Il tema utilizza:
- **Space Grotesk** per titoli e elementi display
- **Inter** per testo del corpo

Per modificare i font, edita l'import in `style.css`:
```css
@import url('https://fonts.googleapis.com/css2?family=...');
```

## Struttura File del Tema

```
digital-atelier/
├── style.css                    # Stylesheet principale con metadata tema
├── functions.php                # Funzioni e setup del tema
├── header.php                   # Header template
├── footer.php                   # Footer template
├── index.php                    # Template blog/archivio generico
├── front-page.php              # Template homepage
├── page.php                    # Template pagina generica
├── single.php                  # Template post singolo
├── single-portfolio.php        # Template progetto portfolio
├── archive-portfolio.php       # Template archivio portfolio
├── template-contatti.php       # Template pagina contatti
├── js/
│   └── main.js                 # JavaScript principale
├── assets/
│   └── images/                 # Immagini del tema
└── README.md                   # Questo file
```

## Sviluppo con VS Code

### Estensioni Consigliate

1. **PHP Intelephense** - Autocompletamento PHP
2. **WordPress Snippets** - Snippet per WordPress
3. **Prettier** - Formattazione codice
4. **ESLint** - Linting JavaScript
5. **Live Server** - Server di sviluppo locale

### Setup VS Code

1. Apri la cartella del tema in VS Code
2. Installa le estensioni consigliate
3. Configura il workspace per WordPress:

```json
{
  "files.associations": {
    "*.php": "php"
  },
  "emmet.includeLanguages": {
    "php": "html"
  }
}
```

## Debugging

### Attiva il Debug Mode

Nel file `wp-config.php`:

```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

I log saranno salvati in `/wp-content/debug.log`

## Supporto e Contributi

### Problemi Comuni

**Q: Il tema non si attiva**
A: Verifica che tutti i file siano presenti e che PHP sia almeno 8.0

**Q: Gli stili non si caricano**
A: Svuota la cache del browser e di WordPress. Verifica che `style.css` esista.

**Q: Il menu mobile non funziona**
A: Verifica che `main.js` sia caricato correttamente in `functions.php`

**Q: Le immagini dei portfolio non si vedono**
A: Assicurati di aver impostato un'immagine in evidenza per ogni progetto

### Contatti

Per supporto o domande:
- Email: info@digitalatelier.it
- GitHub: [giorgiaf95/digital-atelier](https://github.com/giorgiaf95/digital-atelier)

## Licenza

Questo tema è rilasciato sotto licenza GNU General Public License v2 or later.

## Changelog

### Version 1.0.0 (2024)
- Release iniziale
- Conversione da prototipo Lovable
- Template completi per portfolio e blog
- Custom post types e tassonomie
- Design responsive
- Supporto mobile completo

## Credits

- **Design**: Convertito da prototipo Lovable
- **Sviluppo**: Digital Atelier Team
- **Font**: Google Fonts (Space Grotesk, Inter)
- **Icons**: Inline SVG icons

---

**Made with ❤️ by Digital Atelier**
