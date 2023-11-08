from database import db

class Sales(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    total = db.Column(db.String(250))
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'))
    product_id = db.Column(db.Integer, db.ForeignKey('product.id'))
    
    def __str__ (self):
        return (
            f'id: {self.id}, '
            f'total: {self.total}, '
            f'user_id: {self.user_id}'
            f'product_id: {self.product_id}'
        )
        
    
   