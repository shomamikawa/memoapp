from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import pytz

JST = pytz.timezone('Asia/Tokyo')  # 日本標準時を設定

db = SQLAlchemy()

class Memo(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(JST))
    updated_at = db.Column(db.DateTime, default=datetime.now(JST), onupdate=datetime.now(JST))
    background_color = db.Column(db.String(7), default='#FFFFFF')  # 例: #RRGGBB形式
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = db.relationship('User', backref='memos')

    def to_dict(self):
        return {
            'id': self.id,
            'title': self.title,
            'content': self.content,
            'created_at': self.created_at.isoformat(),  # ISO形式で文字列化
            'updated_at': self.updated_at.isoformat(),
            'background_color': self.background_color,
            'user_id': self.user_id
        }


class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, default=datetime.now(JST))

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'created_at': self.created_at.isoformat(),
        }