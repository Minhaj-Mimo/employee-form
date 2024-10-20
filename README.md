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

Formularet inkluderer flere trinn for å samle inn data fra nye ansatte:

- **Trinn 1: Personlige detaljer**
- **Trinn 2: Arbeidsinformasjon**
- **Trinn 3: Adresse og juridisk informasjon**
- **Trinn 4: Finansiell informasjon**
- **Trinn 5: Bekreftelse og samtykker**

Hvert trinn krever spesifikke inndata fra brukeren, hvor noen felt er obligatoriske.

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

