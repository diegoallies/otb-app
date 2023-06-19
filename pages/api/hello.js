export default function handler(req, res) {
  res.status(200).json(
    [
      {
        "name": "John",
        "surname": "Doe",
        "active": "Active 2m ago",
        "streetName": "Baker Street",
        "streetCred": 4.5,
        "username": "johndoe123",
        "password": "password1",
        "posts" : ['https://picsum.photos/536/354']
      },
      {
        "name": "Jane",
        "surname": "Doe",
        "active": "Active 5m ago",
        "streetName": "Maple Avenue",
        "streetCred": 4.2,
        "username": "janedoe456",
        "password": "password2",
        "posts" : ['https://picsum.photos/536/354']
      },
      // ...continue in the same way for all other users
    ]
  )
}
