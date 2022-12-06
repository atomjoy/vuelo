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

### Wyczyść view cache

Po kompilacji projektu Vue wyczyść view cache w Laravel.

```sh
php artisan view:clear
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

### Pakiety dokumentacja

Jak coś nie działa to szukać olśnienia w tych miejscach. Tworzenie plików konfiguracyjnych dla pakietów, kopiowanie tłumaczeń webi.

```sh
https://github.com/atomjoy/webi
https://github.com/atomjoy/vueon
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
