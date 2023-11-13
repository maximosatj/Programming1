from flask_sqlalchemy import SQLAlchemy
db = SQLAlchemy()

USER_DB = 'postgres'
PASS_DB = '51+9=60'
URL_DB = 'localhost'
NAME_DB = 'Programacion1'
FULL_URL_DB = f'postgresql://{USER_DB}:{PASS_DB}@{URL_DB}/{NAME_DB}'

#DATABASE BATSELORD
