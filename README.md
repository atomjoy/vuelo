# Vuelo - Panel klienta w Vue3 z Laravel

Vue3, Laravel panel klienta z logowaniem, tworzeniem użytkownika, odzyskiwaniem hasła, aktywacją konta i mapą google z markerami oraz poligonami dla obszarów dostawy (panel do dalszej rozbudowy).

### Pobierz

```sh
git clone https://github.com/atomjoy/vuelo.git panel
```

### Konfiguracja .env (mysql, smtp) Laravela

Zmień ustawienia dla serwerów mysql i smtp.

```sh
# Local .env file and debug
APP_ENV=local
APP_DEBUG=true

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

### Baza danych i użytkownik

```mysql
CREATE DATABASE IF NOT EXISTS laravel CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE DATABASE IF NOT EXISTS laravel_testing CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
GRANT ALL PRIVILEGES ON *.* TO root@localhost IDENTIFIED BY 'toor' WITH GRANT OPTION;
GRANT ALL PRIVILEGES ON *.* TO root@127.0.0.1 IDENTIFIED BY 'toor' WITH GRANT OPTION;
FLUSH PRIVILEGES
```

### Tabele w bazie danych

Dodaj tabele dla aplikacji Laravela.

```sh
# Aktualizacja tabel
php artisan migrate

# Utwórz nowe tabele
php artisan migrate:fresh
```

### Uruchom server lokalny aplikacji

W katalogu głównym aplikacji Laravela uruchom server http i wszystko powinno działać.

```sh
composer update
php artisan serve
```

# Kompilacja projektu Vue3 po zmianach plików

Aplikacja Vue znajduje się w katalogu **vue-project** Laravela i instalowana jest z **npm init vue@latest**. Wersja końcowa kompilowana jest do katalogu **/public/vue** w aplikacji Laravel.

```sh
# Kompilacja i uruchomienie serwera lokalnego
cd vue-project
npm install
npm run build
php ../artisan serve
```

### Ustawienia Vue, Vite, Google maps api key

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

### Czyszczenie cache Laravela

Po kompilacji projektu Vue wyczyść view cache w Laravel lub gdy występują błędy wczytywania modułów stron w przeglądarce (consola przeglądarki).

```sh
php artisan view:clear
php artisan cache:clear
php artisan config:clear
```

# Testy logowania aplikacji Laravel

```sh
php artisan test --stop-on-failure --testsuite=Webi
```

### Pakiety dokumentacja

Jak coś nie działa to szukać olśnienia w tych miejscach. Tworzenie plików konfiguracyjnych dla pakietów, kopiowanie tłumaczeń webi.

```sh
https://github.com/atomjoy/webi
https://github.com/atomjoy/vueon
```

### Instalacja node, npm

```sh
# Debian jako root
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# Aktualizacja npm@8.11.0
npm install -g npm@latest
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
