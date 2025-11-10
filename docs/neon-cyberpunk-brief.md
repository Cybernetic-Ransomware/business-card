# Neon Cyberpunk Portfolio Brief

## 1. Projekt i cele
- **Cel strony**: cyfrowa wizytowka backendowego developera Python pokazujaca kompetencje, projekty open source i zdolnosc pracy z nowoczesnym ekosystemem chmurowym.
- **Rezultat**: pojedyncza strona z dynamicznymi akcentami, ktora komunikuje profesjonalizm i kreatywnosc w stylistyce neon cyberpunk.
- **Priorytety UX**: szybka orientacja, wyraziste CTA (Github, CV, kontakt), plaska nawigacja w jednym widoku (scroll/scrollspy).

## 2. Profil odbiorcy
- Rekruterzy techniczni i liderzy zespolow backendowych.
- Potencjalni wspolpracownicy open-source.
- Osoby czytajace z desktopu; mobil nie jest priorytetem, ale layout powinien byc responsywny.

## 3. Ton i storytelling
- Glos pewny siebie, techniczny, ale przystepny.
- Podkresl nacisk na skutecznosc i automatyzacje, z elementami futurystycznymi (cyberpunk).
- Teksty krotkie, konkretne, z naciskiem na rezultaty i narzedzia.

## 4. Kierunek wizualny
- **Paleta bazowa** (kolejnosc dominacji):
  - Neo Emerald: `#00FF9F` (glow, CTA, highlighty).
  - Hyper Blue: `#1A8CFF` (tla gradientu, naglowki).
  - Ember Orange: `#FF7B2A` (akcenty przyciskow, timeline).
  - Pulse Purple: `#8A2BFF` (tla kart, gradienty).
  - Synth Red: `#FF3355` (alerty, mikroakcenty).
- **Powierzchnie**: ciemne tlo (`#05060A`) z lekko szumowym gradientem. Dodac subtelny efekt "scanline" lub ziarnistosci na duzych blokach.
- **Swiatlo/Glow**: uzywac box-shadow i blur do neonowego efektu; ograniczyc do 2-3 elementow na ekran, zeby zachowac czytelnosc.
- **Ilustracje**: abstrakcyjne linie siatkowe, pseudo-kod lub imitacje terminala. Unikac stockowych zdjec ludzi.

## 5. Typografia
- **Naglowki**: "Space Grotesk" lub "Syncopate" (Google Fonts). Grubsza waga, szerokie litery.
- **Body**: "Inter" lub "IBM Plex Sans". Wersje mono (`IBM Plex Mono`) do zajawek kodowych.
- **Styl**: uppercase dla naglowkow sekcyjnych, tracking lekko zwiekszony. Dla tekstu glownego preferowany mix regular/medium.

## 6. Struktura strony
1. **Hero**
   - Imie i rola z animowanym gradientem tekstowym.
   - Mikrocopy (1-2 zdania) o specjalizacji (Python backend, automatyzacja, skalowalne API).
   - CTA: `View GitHub`, `Download CV`, `Lets Talk`.
   - Tlo: animowana siatka lub gradient z pseudo-laser beams.
2. **Tech DNA**
   - Siatka kart z jezykami, frameworkami, narzedziami (Python, FastAPI, Django, PostgreSQL, Docker, AWS, CI/CD).
   - Kazda karta: ikona, nazwa, krotka linijka o uzyciu (np. "Projektowanie API o SLA 99.9%").
3. **Experience & Impact**
   - Timeline (poziomy lub pionowy) z 3-4 highlightami: projekt, rola, mierzalny efekt (np. "Zredukowano czas buildow o 40%").
   - Neonowe node'y polaczone liniami.
4. **Featured Projects**
   - Karuzele lub layout masonry z kafelkami. Kazda karta: nazwa, opis, tech stack, link do repo/demo.
   - Dodac badge statusu (Open Source, W produkcji, Hackathon Winner).
5. **Toolbox / Workflow**
   - Interaktywna chmura tagow albo uporzadkowane filtry (Testing, Monitoring, Observability, AI/Automation).
   - Po interakcji (hover/click) wyswietlany tooltip z opisem.
6. **Open Source Pulse**
   - Feed z ostatnimi commitami/kontrybucjami (mock lub realne API GitHub). Celem jest pokazanie aktywnosci.
7. **Contact & Footer**
   - Sekcja z neonowym panelem terminala: `> reach_me --email`, `> schedule --cal`.
   - Ikony (GitHub, LinkedIn, Mail). Dodac kopiowalny e-mail (button z animacja).

## 7. Mikrointerakcje i animacje
- Delikatne przejscia fade-in/slide-in na scroll (Svelte motion).
- Glow pulsujacy dla CTA (animacja 3-5s loop, bez przesady).
- Hover efekt pseudo-skanera na kartach (gradient przesuwajacy sie przez element).
- Timeline: po wejsciu w viewport node'y "zapala" sie od dolu do gory.

## 8. Komponenty i ich rola
- `HeroPanel`: kontener z gradientem, headline, CTA.
- `TechCard`: modul z ikonka, nazwa, opis, tooltip (wspolny styl dla Tech DNA i Toolbox).
- `TimelineItem`: strukturyzowany blok z danymi doswiadczenia, datami i linkami.
- `ProjectCard`: karta z overlay gradientowym, przyciskiem do repo/demo.
- `ActivityFeed`: komponent integrujacy dane (poczatek jako mock).
- `NeonDivider`: element ozdobny (linie, siatka) wykorzystywany miedzy sekcjami.

## 9. Copy i zawartosc
- Hero: 6-8 slow headline, 12-18 slow opis.
- Tech DNA: 6-9 kart; opis max 12 slow.
- Experience: 3-4 wpisy, kazdy 30-40 slow.
- Projects: 3-5 kart, opis 20-30 slow, bullet ze stosem.
- Contact: jedno zdanie + CTA. Dodac info o rozpisce czasowej (np. "GMT+1").

## 10. Technologia i implementacja
- Bazowac na SvelteKit + Tailwind (skonfigurowany w repo). Stylowanie tailwindow + custom klasy dla neonowego efektu.
- Uzyc modulow Svelte 5 (snippets teleporty, runes) jesli uzasadnione.
- Dla animacji: Svelte `animate`/`transition` + CSS `@keyframes`. Rozwazyc `motion` dla scroll-trigger (wbudowane `intersectionObserver`).
- Wersja poczatkowa bez realnych API; zdefiniowac interfejs serwisowy tak, aby latwo podpiac GitHub (REST v3) pozniej.
- Dostepnosc: zadbac o kontrast (jasne neonowe na ciemnym tle), zapewnic aria-label dla ikon.

## 11. Plan wdrozenia
1. Stworzyc strukture sekcji i glowne komponenty (layout, hero, sekcje placeholder).
2. Zaimplementowac palete kolorow i globalne utility (gradienty, glow).
3. Wypelnic dane mockowe i teksty (zastapic prawdziwymi kiedy beda gotowe).
4. Dodac animacje oraz interakcje.
5. Przygotowac wersje produkcyjna (`npm run build`, `npm run preview`) i wdrozyc np. na Vercel.

## 12. Materialy dodatkowe
- Ikony: Tabler Icons lub Lucide jako SVG (latwe do stylowania neonowego).
- Teksturki: generowane w CSS (noise overlay) lub przez static asset (PNG 512x512, tile).
- Inspiracje: Strony w stylu cyberpunk (np. neon dashboards, terminal landing pages) dla refleksji nad swiatlem i glow.
