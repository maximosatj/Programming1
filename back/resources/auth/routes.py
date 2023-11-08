from flask import Blueprint, request, jsonify
from database import db
from models.User import User

auth = Blueprint('auth', __name__, url_prefix='/auth')

@auth.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    email = data.get('email')
    password = data.get('password')

    emailDb = User.query.filter_by(email=email).first()
    role = emailDb.role
    
    if emailDb and emailDb.password == password:
        return jsonify(role=role, id = emailDb.id), 200
    else:
        response = {'Mensaje' : 'email o password incorrecto'}
        return jsonify(response), 401
    
    
@auth.route('/register', methods=['POST'])
def register():
    
    email = request.json['email']
    password = request.json['password']
    role = '1'
    print( email, password, role)

    user = User( email=email, password=password, role=role)
    db.session.add(user)
    db.session.commit()
    return jsonify(role=role, id = user.id),200
    