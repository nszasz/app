## 👨🏻‍💻 Feladatok

### 1. feladat
App.tsx

### 2. feladat
Először megvizsgálnám a kódot, hogy van-e onClick event listener a gombon, a böngésző debugger tool-jával pedig a html elemet. 
Ellenőrizném a gomb hover állapotát, megnézném kap-e esetleg valahonnan pointer-events: none; CSS rule-t. Ehhez hasonló jelenséget okozhat, ha az "inert" HTML attribútum kerül a gomb valamely szülő elemére.
Akkor is lehet ilyet tapasztalni, ha esetleg a gombtól független helyen, egy html elem a gomb fölé kerül. Például egy overlay.

### 3. feladat
Az appban a "Kezdhetjük" gombra kattintva lefut az elvárt JS funkció. A kiindulási pont a components/StartButton komponens.

### 4. feladat
A következő pár gondolat jutott eszembe a kérdésben szereplő mezőről.

Kitöltetlen állapotban a mezőben megjelenő label összetéveszthető lehet egy placeholder-rel vagy egy előre kitöltött mezővel. Ez megzavarhatja a felhasználókat. De ezzel a label megjelenítéssel helyet spórolhatunk a különálló label megjelenítéshez képest.

Ha placeholder-t szeretnénk használni a mezőben, akkor azt labellel (label szöveg helyett) lehet csak megtenni vagy akkor jelenne meg, ha fókuszt kapott a mező, de még nem írtunk bele értéket. Ezek rossz felhasználói élményt adhatnak.
Bár placeholder helyett jobb megoldás lehet a kitöltési segédleteket a mező alá helyezni, hogy mindig látható legyen.

Érdemes lehet átgondolni a kitöltött állapotban látható label méretét és pozícióját az értékhez képest. Ha kisebb a label mérete kitöltött állapotban, akkor nehezen olvashatóvá válhat, ha nagyobb, akkor túl sok helyett vehet el a mezőben. Kitöltetlen állapotban helyett kell hagyni a label kitöltött állapoti pozíciójának, különben kitöltés hatására "ugrálni fog" a felület.

Ha kisebb a mező hossza, mint a label hossza, akkor nem lesz olvasható.

Szükséges lehet valamilyen animáció a label pozíciójának a változásához.

Úgy gondolom ezeket a gondolatokat lenne érdemes átbeszélni a designerrel, mielőtt a kérdésben megfogalmazott mező megoldást kezdünk fejleszteni.
