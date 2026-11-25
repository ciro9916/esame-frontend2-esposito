# Catalogo Film — Web App React

Applicazione web sviluppata in **React** 

## Funzionalità principali

* **Esplorazione catalogo (`/`):** visualizza un elenco di film presi da un API

* **Scheda riepilogativa (`SingleFilm`):** mostra per ogni film poster, titolo, data di uscita, valutazione e un pulsante per accedere ai dettagli.

* **Pagina di dettaglio (`/movies/:id`):** carica dinamicamente tramite ID le informazioni complete del film selezionato (titolo, tagline, durata, voto e conteggio voti, stato, lingua originale, generi, trama e case di produzione) con link per tornare all'elenco principale.

* **Navigazione persistente (`Shell` & `Header`):** layout condiviso che mantiene fissa la barra superiore con il nome dell'applicazione e il collegamento alla home durante il cambio di rotta[cite: 1].

## Architettura dei componenti

```text
Shell
 ├── Header 
 └── Outlet (contenuto dinamico)
      ├── MovieList (rotta "/")
      │    └── SingleFilm (card del singolo film)
      └── DetailPage (rotta "/movies/:id")
