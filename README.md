## Shoocal-assignment

## Installation

Clone the repo
```sh
git clone https://github.com/rohan-mistry/Shoocal-assignment.git
```

Go Inside the app to create and activate virtual env
```sh
python -m venv venv
venv\Scripts\acivate
```

Install required packages
```sh
pip install -r requirements.txt
```

Setup backend from root folder
```sh
cd website
python manage.py migrate
python manage.py runserver
```

Setup frontend from root folder
```sh
cd client
npm install
npm start
```
