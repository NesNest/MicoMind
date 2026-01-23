class User:
    def __init__(self, username: str, password: str, email: str):
        self.Id = None
        self.username = username
        # self.password = password
        self.email = email
        self.isActive = True
        self.isSuperuser = False
        
