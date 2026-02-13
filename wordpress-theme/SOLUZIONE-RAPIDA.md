# ⚡ SOLUZIONE RAPIDA - Errore "Stylesheet is missing"

## 🎯 Il Problema

Vedi questo errore in WordPress quando provi ad attivare il tema:
```
❌ Stylesheet is missing
```

## ✅ La Soluzione (30 secondi)

### Causa

Hai caricato la cartella **SBAGLIATA**!

### Fix

1. **Trova** la cartella corretta:
   ```
   wordpress-theme/digital-atelier/  ← QUESTA!
   ```

2. **Copia** SOLO `digital-atelier/` in:
   ```
   wp-content/themes/digital-atelier/
   ```

3. **Verifica** che `style.css` sia qui:
   ```
   wp-content/themes/digital-atelier/style.css  ✅
   ```

4. **Attiva** il tema da WordPress Admin

## 📖 Guide Dettagliate

- **Serve aiuto?** → [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
- **Guida visiva** → [GUIDA-VISIVA.md](GUIDA-VISIVA.md)
- **Installazione** → [INSTALLAZIONE.md](INSTALLAZIONE.md)

## 🔍 Verifica Veloce

Controlla questo file esista:
```bash
# Via terminale
ls wp-content/themes/digital-atelier/style.css

# Se vedi il file → ✅ CORRETTO
# Se "file not found" → ❌ cartella sbagliata
```

## 💡 Ricorda

```
✅ themes/digital-atelier/        GIUSTO
❌ themes/wordpress-theme/        SBAGLIATO
```

---

**Fatto!** Il tema ora dovrebbe funzionare! 🎉

Se hai ancora problemi, leggi: [TROUBLESHOOTING.md](TROUBLESHOOTING.md)
