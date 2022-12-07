# Vuelo - Panel klienta w Vue3 z Laravel

Vue3, Laravel panel klienta z logowaniem, tworzeniem użytkownika, odzyskiwaniem hasła, aktywacją konta i mapą google z markerami oraz poligonami dla obszarów dostawy (panel do dalszej rozbudowy).

### Pobieranie

```sh
git clone https://github.com/atomjoy/vuelo.git panel
```

### Baza danych, konfiguracja .env (mysql, smtp)

Skonfiguruj plik .env i dodaj tabele w bazie danych Laravela.

```sh
# Aktualizacja tabel
php artisan migrate

# Utwórz nowye tabele
php artisan migrate:fresh
```

### Uruchom server lokalny aplikacji

W katalogu głównym aplikacji Laravela uruchom server http i wszystko powinno działać (jak o czymś nie zapomniałem).

```sh
composer update
php artisan serve
```

### Kompilacja projektu Vue3 po zmianach plików

Aplikacja Vue znajduje się w katalogu **vue-project** Laravela i instalowana jest z **npm init vue@latest**. Wersja końcowa kompilowana jest do katalogu **/public/vue** w aplikacji Laravel.

```sh
# Kompilacja i uruchomienie serwera lokalnego
cd vue-project
npm install
npm run build
php ../artisan serve
```

# Test logowania aplikacji Laravel

```sh
php artisan test --stop-on-failure --testsuite=Webi
```

### Wyczyść view cache

Po kompilacji projektu Vue wyczyść view cache w Laravel lub gdy występują błędy wczytywania modułów stron w przeglądarce (consola przeglądarki).

```sh
php artisan view:clear
php artisan cache:clear
php artisan config:clear
```

### Pakiety dokumentacja

Jak coś nie działa to szukać olśnienia w tych miejscach. Tworzenie plików konfiguracyjnych dla pakietów, kopiowanie tłumaczeń webi.

```sh
https://github.com/atomjoy/webi
https://github.com/atomjoy/vueon
```

### Ustawienia Laravel

Zmienić w pliku .env

```sh
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=toor

MAIL_MAILER=smtp
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=your.email@gmail.com
MAIL_PASSWORD=
MAIL_ENCRYPTION=tls
MAIL_FROM_ADDRESS=your.email@gmail.com
MAIL_FROM_NAME="${APP_NAME}"
```

### Ustawienia Vue, google map api key

Zmienić w pliku vue-project/.env

```sh
# Console log
VITE_AUTH_STORE_DEBUG=true
# App default locale
VITE_LOCALE=en
# Available locale, first on list always default locale!
VITE_AVAILABLE_LOCALES="en|pl"
# Google map key
VITE_GMAP_KEY=
```

# Świeża instalacja Vue3 wyczyści wszystko (dev only)

Project w katalogu **vue-project** aplikacji Laravel.

```sh
rm -rf vue-project
npm init vue@latest vue-project
php artisan vendor:publish --tag=vueon-config --force
cd vue-project
npm install
npm run build
cd ..
php artisan view:clear
php artisan serve
```
