# Importgranskning: golfdata Östergötland

**Källa:** `ostergotland_golfdata_samlad_uppdaterad.json`  
**Databasversion:** `2026-11-19-vesterby`  
**Granskningsdatum:** 2026-11-19

## Importresultat

- 19 klubbposter i databasens register.
- 14 banprofiler importerade till den valbara katalogen.
- 252 hålposter och 972 positiva teeavstånd från JSON-filen.
- Alla profiler omfattar 18 scorekortshål. Bråvikens GK är en fysisk 9-hålsslinga spelad två varv; dess gamla 18-hålsprofil har behållits separat eftersom uppgifterna beskriver olika layouter.
- Ingen dubblett av profil-ID efter katalogmigreringen. Äldre alias tas bort från banväljaren medan rundornas historiska snapshots lämnas orörda.

| Bana | Ort | Hålposter | Tee-alternativ | Status i källfil |
| --- | --- | ---: | ---: | --- |
| Bråvikens GK · 9-hålsslinga (två varv) | Norrköping | 18 | 5 | Tredjepartsdata, ej verifierad |
| Finspångs GK · 18-hålsbanan | Finspång | 18 | 4 | Tredjepartsdata, ej verifierad |
| Landeryd · Classic | Linköping | 18 | 3 | Tredjepartsdata, ej verifierad |
| Landeryd · Masters | Linköping | 18 | 4 | Tredjepartsdata; klubbtillhörighet behöver jämföras |
| Landeryd · Vesterby Links | Linköping | 18 | 4 | Hålmaterial importerat; officiella totalsummor bekräftade |
| Linköpings GK | Linköping | 18 | 5 | Tredjepartsdata, ej verifierad |
| Mauritzbergs Slott & Golf | Vikbolandet | 18 | 4 | Tredjepartsdata, ej verifierad; konflikt med tidigare appdata |
| Mjölby GK · 18-hålsbanan | Mjölby | 18 | 3 | Tredjepartsdata, ej verifierad |
| Motala GK · 18-hålsbanan | Motala | 18 | 5 | Tredjepartsdata, ej verifierad |
| Ombergs Golf · Ombergsbanan | Ödeshög | 18 | 4 | Tredjepartsdata, ej verifierad |
| Vadstena GK · 18-hålsbanan | Vadstena | 18 | 4 | Tredjepartsdata, ej verifierad |
| Vreta Kloster GK · 18-hålsbanan | Ljungsbro | 18 | 5 | Tredjepartsdata, ej verifierad |
| Waldemarsviks Golfbana | Waldemarsvik | 18 | 2 | Tredjepartsdata, ej verifierad |
| Östad Golf | Väderstad | 18 | 2 | Tredjepartsdata, ej verifierad; värdekonflikt flaggad |

## Datakvalitetskontroller

JSON-data har kontrollerats före import. Banorna har unika ID:n, 18 numrerade hål vardera, par per hål inom 2–6, unika handicapindex 1–18 och positiva längder för varje angiven tee. Summan av de 18 hålens längder stämmer med databasens registrerade totallängd för varje tee. Summan av hålens par stämmer med banans par.

Course Rating och Slope Rating saknas för samtliga 14 banor i JSON-filen och visas därför inte som importerade värden. Adress, koordinater och kontaktuppgifter finns inte i filens banposter. Ort har behållits från befintliga katalogposter där det fanns en matchning; ort kan annars behöva kompletteras i banadministrationen.

Källans återanvändningsrättigheter är `not_established` för posterna. Data är därför tydligt märkt med källa/status och ska kontrolleras med respektive klubb innan den används som officiellt handicapunderlag. Appen hävdar inte att den skickar handicapresultat till ett auktoriserat system.

## Konflikter och osäkerheter

Inga osäkra värden skrivs över tyst. I **84 fält** för Mauritzbergs Slott & Golf skiljer den nya JSON-posten sig från befintlig profil: 14 indexvärden och 70 teeavstånd. Den tidigare appens värden har behållits för dessa fält och konfliktens bana, fält, tidigare värde och importerade värde finns i `coursesReport.conflicts` och kan granskas under **Banadministration**. Banan är märkt som importerad och får kontrolleras mot aktuellt scorekort innan värden ändras.

Östad Golf-posten innehåller en uttrycklig konflikt mot golfify.io om längder och stroke index. Värdena är därför markerade som obekräftade och ska inte användas för officiell handicapberäkning.

Landeryd Masters-posten anger att Caddee inte listar banan som ansluten. Kontroll mot Landeryds aktuella scorekort rekommenderas. Vesterby har fyra tee-alternativ och samtliga 18 hål i importen.

Banadministrationen kan komplettera ort, webbplats och uppgifter om spelade hål. Hål-, tee-, index- och ratingredigering ingår inte i det befintliga administrationsformuläret och ska inte ändras utan en källkontroll.
