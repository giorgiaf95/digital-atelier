# Guida Rapida all'Installazione - Digital Atelier Theme

## Installazione con Local by Flywheel (Consigliata)

### Passo 1: Installa Local
1. Scarica Local da https://localwp.com/
2. Installa l'applicazione sul tuo computer
3. Apri Local

### Passo 2: Crea un Nuovo Sito
1. Clicca su "Create a new site" (grande pulsante +)
2. Scegli un nome per il sito (es. "digital-atelier-test")
3. Seleziona "Preferred" per l'ambiente
4. Configura:
   - **Username**: admin
   - **Password**: [scegli una password sicura]
   - **Email**: la tua email
5. Clicca "Add Site"

### Passo 3: Installa il Tema
1. Una volta creato il sito, clicca su "Go to site folder"
2. Naviga in: `app/public/wp-content/themes/`
3. Copia la cartella `digital-atelier` da questo repository
4. Incollala nella cartella `themes/`

### Passo 4: Attiva il Tema
1. In Local, clicca su "Admin" per aprire l'area amministrativa
2. Vai su **Aspetto → Temi**
3. Trova "Digital Atelier"
4. Clicca "Attiva"

### Passo 5: Configurazione Base
1. Vai su **Impostazioni → Lettura**
2. Seleziona "Una pagina statica"
3. Crea nuove pagine:
   - "Home" (seleziona come Homepage)
   - "Blog" (seleziona come Pagina articoli)
   - "Contatti" (usa template "Contatti")

4. Vai su **Aspetto → Menu**
5. Crea un nuovo menu "Menu Principale"
6. Aggiungi le voci del menu:
   - Home
   - Web Design (crea pagina)
   - Modelli 3D (crea pagina)
   - Grafiche 2D (crea pagina)
   - Game Design (crea pagina)
   - Narrative Design (crea pagina)
   - News (link personalizzato a /news)
   - Contatti

7. Assegna il menu alla posizione "Menu Principale"

## Installazione su Server Web

### Metodo A: Via Pannello di Controllo (cPanel)

1. Comprimi la cartella `digital-atelier` in un file ZIP
2. Accedi al tuo cPanel
3. Vai su "File Manager"
4. Naviga in `public_html/wp-content/themes/`
5. Clicca "Upload" e carica il file ZIP
6. Clicca con il tasto destro sul file ZIP e seleziona "Extract"
7. Elimina il file ZIP
8. Vai su wp-admin → Aspetto → Temi
9. Attiva "Digital Atelier"

### Metodo B: Via FTP

1. Apri il tuo client FTP (FileZilla, Cyberduck, etc.)
2. Connettiti al tuo server
3. Naviga in `/public_html/wp-content/themes/`
4. Carica l'intera cartella `digital-atelier`
5. Vai su wp-admin → Aspetto → Temi
6. Attiva "Digital Atelier"

## Plugin da Installare (Opzionali ma Consigliati)

### Plugin Essenziali
1. **Advanced Custom Fields (ACF)**
   - Per aggiungere campi personalizzati ai progetti portfolio
   - Gratuito nella directory WordPress

2. **Contact Form 7**
   - Per il form di contatto nella pagina Contatti
   - Gratuito nella directory WordPress

### Come Installare i Plugin
1. Vai su **Plugin → Aggiungi nuovo**
2. Cerca il nome del plugin
3. Clicca "Installa ora"
4. Clicca "Attiva"

## Aggiungere Custom Fields con ACF (Advanced Custom Fields)

### Per i Progetti Portfolio

1. Installa e attiva ACF
2. Vai su **Custom Fields → Aggiungi nuovo**
3. Nome gruppo: "Dettagli Portfolio"
4. Aggiungi i seguenti campi:
   - **Nome campo**: client, **Tipo**: Text, **Etichetta**: Cliente
   - **Nome campo**: project_date, **Tipo**: Text, **Etichetta**: Data Progetto
   - **Nome campo**: project_url, **Tipo**: URL, **Etichetta**: URL Progetto
   - **Nome campo**: technologies, **Tipo**: Text, **Etichetta**: Tecnologie
   - **Nome campo**: gallery, **Tipo**: Gallery, **Etichetta**: Galleria
5. In "Posizione", imposta: Tipo di post = Portfolio
6. Pubblica

## Struttura Pagine Consigliata

```
Home (Homepage statica)
├── Web Design (pagina)
├── Modelli 3D (pagina)
├── Grafiche 2D (pagina)
├── Game Design (pagina)
├── Narrative Design (pagina)
├── News (archivio blog)
│   └── Articolo 1
│   └── Articolo 2
├── Portfolio (archivio progetti)
│   └── Progetto 1
│   └── Progetto 2
└── Contatti (template Contatti)
```

## Primi Contenuti da Creare

### 1. Pagina Home
- Usa il template predefinito
- Verrà visualizzata con il design hero e sezioni servizi

### 2. Crea Categorie Portfolio
Vai su **Portfolio → Categorie Portfolio** e crea:
- Web Design
- Modelli 3D
- Grafiche 2D
- Game Design
- Narrative Design

### 3. Aggiungi Primi Progetti
Vai su **Portfolio → Aggiungi nuovo**
- Titolo: Nome del progetto
- Contenuto: Descrizione completa
- Immagine in evidenza: Immagine principale
- Categoria: Scegli una categoria
- (Se ACF installato) Compila i campi personalizzati

### 4. Scrivi Primi Articoli
Vai su **Articoli → Aggiungi nuovo**
- Titolo dell'articolo
- Contenuto
- Categoria (crea categorie pertinenti)
- Immagine in evidenza

### 5. Pagina Contatti
- Crea pagina "Contatti"
- Seleziona template "Contatti"
- Se hai Contact Form 7:
  1. Vai su **Contatti → Aggiungi nuovo**
  2. Copia lo shortcode
  3. Incollalo nel contenuto della pagina Contatti

## Personalizzazione Colori

Per modificare i colori del tema, aggiungi CSS personalizzato:

1. Vai su **Aspetto → Personalizza → CSS aggiuntivo**
2. Aggiungi il tuo CSS:

```css
:root {
  --color-primary: hsl(220, 85%, 55%);  /* Cambia il colore primario */
  --color-accent: hsl(150, 75%, 55%);   /* Cambia il colore accento */
}
```

## Risoluzione Problemi

### Il tema non appare
- Verifica che tutti i file siano stati caricati
- Controlla i permessi delle cartelle (755 per cartelle, 644 per file)

### Gli stili non si vedono
- Vai su **Impostazioni → Permalink** e clicca "Salva modifiche"
- Svuota la cache del browser (Ctrl+Shift+R o Cmd+Shift+R)

### Il menu mobile non funziona
- Verifica che il file `js/main.js` sia presente
- Controlla la console del browser per errori JavaScript

### Le immagini dei portfolio non si vedono
- Assicurati di aver impostato un'immagine in evidenza
- Vai su **Impostazioni → Media** e verifica le dimensioni immagini

## Risorse Utili

- **Documentazione WordPress**: https://wordpress.org/documentation/
- **Local by Flywheel**: https://localwp.com/help-docs/
- **Advanced Custom Fields**: https://www.advancedcustomfields.com/resources/
- **Contact Form 7**: https://contactform7.com/docs/

## Supporto

Per assistenza o domande:
- Consulta il file README.md nella cartella del tema
- Controlla la documentazione WordPress ufficiale
- Apri una issue su GitHub: https://github.com/giorgiaf95/digital-atelier

---

**Buon lavoro con Digital Atelier! 🚀**
