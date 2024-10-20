<p align="center">
    <img src="path_to_your_logo" alt="Logo" width="150">
</p>

<h1 align="center">Ny Ansatte Registreringsskjema</h1>

<p align="center">
    En komplett registreringsformular for nye ansatte bygget med React, Next.js, og Firebase.
</p>

## Innholdsfortegnelse

- [Installasjonsprosess](#installasjonsprosess)
- [Versjonskrav](#versjonskrav)
- [Initiering](#initiering)
- [Om prosjektet](#om-prosjektet)
- [Avdelingsdata](#avdelingsdata)
- [Teknologi](#teknologi)

## Installasjonsprosess

For å sette opp prosjektet lokalt, følg disse stegene:

1. **Klone prosjektet**:
    ```shell
    git clone https://github.com/Minhaj-Mimo/employee-form.git
    ```
2. **Naviger til prosjektmappe**:
    ```shell
    cd employee-form
    ```
3. **Bytt til hovedgren**:
    ```shell
    git checkout main
    ```
4. **Installer nødvendige pakker**:
    ```shell
    npm install
    ```
5. **Start utviklingsserveren**:
    ```shell
    npm run dev
    ```
   Besøk [http://localhost:3000](http://localhost:3000) for å se applikasjonen.

## Versjonskrav

Prosjektet krever følgende versjoner for å kjøre korrekt:

- **react**: `18.2.0`
- **node**: `18.17.0`
- **next**: `14.2.15`
- **firebase**: `^10.14.1`

## Initiering

Prosjektet bruker følgende hovedteknologier:

- **Frontend**: React
- **Backend**: Firebase (for databasebehandling)
- **Email**: Resend (for e-post funksjonalitet)

## Om prosjektet

## Om prosjektet

Dette prosjektet implementerer et omfattende registreringsskjema for nye ansatte. Formularet er designet for å samle inn og behandle informasjon gjennom en serie trinn, hvert fokusert på ulike aspekter av ansattes informasjon.

### Trinn 1: Personlige detaljer
I dette trinnet grunnleggende grunnleggende personlig informasjon som er nødvendig for alle nye ansatte. Dette inkluderer:
- **Fullt navn**: Et tekstfelt der brukeren oppgir sitt fullstendige navn.
- **Fødselsdato**: En datovelger for å registrere brukerens fødselsdato.
- **Primært telefonnummer**: Et felt for å legge inn et kontaktnummer.
- **E-postadresse**: Et felt for e-postadresse hvor korrespondanse vil bli sendt.

### Trinn 2: Arbeidsinformasjon
Dette trinnet handler om den profesjonelle bakgrunnen til nye ansatte:
- **Stillingstittel**: En tekstboks hvor brukeren angir sin jobbtittel.
- **Avdeling**: En dropdown-meny som lar brukeren velge fra forhåndsdefinerte avdelingsnavn.
- **Direkte veileder**: Et felt for å nevne brukerens veileder i selskapet.
- **Tilmeldingsdato**: En datovelger for å markere brukerens startdato.
- **Ansettelsestype**: En dropdown-meny for å velge mellom heltid, deltid, kontrakt eller intern.

### Trinn 3: Adresse og juridisk informasjon
Innsamling av adresse og juridiske detaljer for identifikasjon og dokumentasjon:
- **Gjeldende adresse og Permanent adresse**: Tekstfelt for gateadresse, sted, postnummer og land.
- **Personnummer**: Et felt for sosial sikkerhet eller tilsvarende identifikasjonsnummer.
- **Førerkortnummer**: Et felt for førerkortnummer hvis relevant.

### Trinn 4: Finansiell informasjon
Viktig for oppsett av lønn og andre økonomiske transaksjoner:
- **Bankens navn**: Et felt for å angi navnet på banken hvor lønnen skal deponeres.
- **Kontonummer og Rutingnummer**: Felt for bankkontodetaljer for lønnsutbetalinger.
- **Lønnsbeløp**: Et numerisk felt for å oppgi den avtalte lønnen.

### Trinn 5: Bekreftelse og samtykker
Siste trinn før innsending, hvor brukeren kan kontrollere innsendt informasjon og gi nødvendig samtykker:
- **Samtykke Checkbox**: En avkrysningsboks der brukeren må samtykke til behandling av personopplysninger i henhold til personvernreglene.
- **Innsendingsknapp**: En knapp for å sende inn skjemaet.
- **Takk-side**: En melding som vises etter vellykket innsending.


## Avdelingsdata

Dropdown-menyen i trinn 2 tilbyr valg mellom flere avdelinger:

- Divisjon for sikkerhetsklær
- Avdeling for personlig verneutstyr
- Forskning og utvikling
- Avdeling for IT-løsninger
- Logistikk og forsyningskjede
- Kvalitetssikring
- Human Resources
- Markedsføring og kommunikasjon
- Salg og kundeservice
- Bærekraft og etterlevelse

## Teknologi

- **Frontend**: React brukes for å bygge brukergrensesnittet.
- **Backend**: Firebase benyttes for databaselagring.
- **Email**: Resend brukes for å håndtere e-postfunksjoner.

