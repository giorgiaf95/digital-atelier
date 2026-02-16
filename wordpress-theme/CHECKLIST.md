# ✅ Checklist Setup Rapido - Digital Atelier WordPress Theme

Usa questa checklist per configurare rapidamente il tema dopo l'installazione.

## 📦 Installazione Tema

- [ ] Installa Local by Flywheel sul tuo computer
- [ ] Crea nuovo sito WordPress in Local
- [ ] Copia cartella `digital-atelier` in `wp-content/themes/`
- [ ] Attiva tema "Digital Atelier" da wp-admin

## 🎨 Configurazione Base

### Impostazioni Generali
- [ ] Impostazioni → Generali
  - [ ] Imposta Titolo sito: "Digital Atelier"
  - [ ] Imposta Motto: "Design, arte e storytelling"
  - [ ] Imposta Fuso orario

### Permalink
- [ ] Impostazioni → Permalink
  - [ ] Seleziona "Nome articolo"
  - [ ] Clicca "Salva modifiche"

### Lettura
- [ ] Impostazioni → Lettura
  - [ ] Seleziona "Una pagina statica"
  - [ ] Crea pagina "Home" e seleziona come Homepage
  - [ ] Crea pagina "Blog" e seleziona come Pagina articoli

## 📄 Crea Pagine Principali

- [ ] Pagina "Home" (imposta come homepage)
- [ ] Pagina "Blog" (imposta come pagina articoli)
- [ ] Pagina "Web Design" (slug: `/web-design`)
- [ ] Pagina "Modelli 3D" (slug: `/modelli-3d`)
- [ ] Pagina "Grafiche 2D" (slug: `/grafiche-2d`)
- [ ] Pagina "Game Design" (slug: `/game-design`)
- [ ] Pagina "Narrative Design" (slug: `/narrative-design`)
- [ ] Pagina "Contatti" (seleziona template "Contatti")

## 🎯 Menu di Navigazione

- [ ] Aspetto → Menu → Crea nuovo menu "Menu Principale"
- [ ] Aggiungi voci menu:
  - [ ] Home
  - [ ] Web Design
  - [ ] Modelli 3D
  - [ ] Grafiche 2D
  - [ ] Game Design
  - [ ] Narrative Design
  - [ ] News (link personalizzato a `/news` o alla pagina Blog)
  - [ ] Contatti
- [ ] Assegna menu a "Menu Principale"

## 🎨 Identità Sito

- [ ] Aspetto → Personalizza → Identità sito
  - [ ] Carica logo personalizzato (consigliato: 400x100px, PNG trasparente)
  - [ ] Carica icona sito (favicon) (32x32px)

## 📁 Categorie Portfolio

- [ ] Portfolio → Categorie Portfolio
  - [ ] Crea "Web Design"
  - [ ] Crea "Modelli 3D"
  - [ ] Crea "Grafiche 2D"
  - [ ] Crea "Game Design"
  - [ ] Crea "Narrative Design"

## 🔌 Plugin Essenziali (Opzionale ma Consigliato)

### Da Installare
- [ ] Advanced Custom Fields (ACF) - Per campi portfolio
- [ ] Contact Form 7 - Per form contatti
- [ ] Yoast SEO - Per ottimizzazione SEO

### Configurazione ACF
- [ ] Custom Fields → Aggiungi nuovo
- [ ] Nome: "Dettagli Portfolio"
- [ ] Aggiungi campi:
  - [ ] `client` (Text) - Cliente
  - [ ] `project_date` (Text) - Data Progetto
  - [ ] `project_url` (URL) - URL Progetto
  - [ ] `technologies` (Text) - Tecnologie
  - [ ] `gallery` (Gallery) - Galleria
- [ ] Posizione: Tipo di post = Portfolio
- [ ] Pubblica

### Configurazione Contact Form 7
- [ ] Contatti → Aggiungi nuovo
- [ ] Copia shortcode generato
- [ ] Incolla in pagina "Contatti"

## 📝 Contenuti di Test

### Progetti Portfolio
- [ ] Crea 3-5 progetti portfolio di esempio
  - [ ] Titolo progetto
  - [ ] Descrizione completa
  - [ ] Immagine in evidenza
  - [ ] Categoria
  - [ ] Campi personalizzati (se ACF installato)

### Articoli Blog
- [ ] Crea 2-3 articoli di esempio
  - [ ] Titolo
  - [ ] Contenuto
  - [ ] Immagine in evidenza
  - [ ] Categoria
  - [ ] Tags

## 🎨 Personalizzazioni (Opzionale)

### Colori
- [ ] Aspetto → Personalizza → CSS aggiuntivo
- [ ] Modifica variabili CSS per colori personalizzati:
```css
:root {
  --color-primary: hsl(38, 85%, 55%);
  --color-accent: hsl(12, 75%, 55%);
}
```

### Widget Footer
- [ ] Aspetto → Widget
- [ ] Aggiungi widget in area "Footer"
  - [ ] Menu di navigazione
  - [ ] Testo personalizzato
  - [ ] Articoli recenti

## ✅ Test Finale

### Navigazione
- [ ] Testa menu principale
- [ ] Testa menu mobile (riduci finestra)
- [ ] Testa tutti i link

### Pagine
- [ ] Homepage si visualizza correttamente
- [ ] Pagine servizi sono accessibili
- [ ] Pagina contatti funziona
- [ ] Blog mostra articoli
- [ ] Portfolio mostra progetti

### Responsive
- [ ] Testa su mobile (< 768px)
- [ ] Testa su tablet (768px - 1024px)
- [ ] Testa su desktop (> 1024px)

### Performance
- [ ] Immagini si caricano correttamente
- [ ] JavaScript funziona (menu mobile, back to top)
- [ ] CSS applicato correttamente

## 🚀 Deploy (Quando Pronto)

- [ ] Backup completo del sito
- [ ] Test su ambiente staging
- [ ] Ottimizza immagini
- [ ] Installa plugin caching (WP Rocket, W3 Total Cache)
- [ ] Configura SSL
- [ ] Test di velocità (GTmetrix, PageSpeed Insights)
- [ ] Deploy su produzione

## 📚 Risorse Utili

- [ ] Salva questo documento
- [ ] Leggi README.md per documentazione completa
- [ ] Leggi INSTALLAZIONE.md per guida dettagliata
- [ ] Consulta CONVERSIONE.md per info tecniche

## 🆘 In Caso di Problemi

**Tema non si attiva:**
- Verifica PHP >= 8.0
- Controlla permessi file (755 cartelle, 644 file)

**Stili non si caricano:**
- Impostazioni → Permalink → Salva modifiche
- Svuota cache browser (Ctrl+Shift+R)

**Menu mobile non funziona:**
- Verifica file js/main.js presente
- Controlla console browser per errori

**Immagini portfolio non si vedono:**
- Assicurati di aver impostato immagine in evidenza
- Verifica dimensioni immagini in Impostazioni → Media

---

## 🎉 Fatto!

Una volta completata questa checklist, il tuo sito Digital Atelier è pronto!

**Prossimi step:**
- Personalizza contenuti
- Aggiungi i tuoi progetti reali
- Ottimizza per SEO
- Promuovi il tuo lavoro

**Buon lavoro! 🚀✨**
