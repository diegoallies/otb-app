export default function handler(req, res) {
  res.status(200).json([
    {
      name: "John",
      surname: "Doe",
      active: "Active 2m ago",
      streetName: "Baker Street",
      streetCred: 4.5,
      username: "johndoe123",
      password: "password1",
      email: "john.doe@example.com",
      phone: "123-456-7890",
      address: "123 Baker Street, City, Country",
      posts: ["https://picsum.photos/536/354"],
    },
    {
      name: "Jane",
      surname: "Doe",
      active: "Active 5m ago",
      streetName: "Maple Avenue",
      streetCred: 4.2,
      username: "janedoe456",
      password: "password2",
      email: "jane.doe@example.com",
      phone: "987-654-3210",
      address: "456 Maple Avenue, City, Country",
      posts: ["https://picsum.photos/536/354"],
    },
    {
      name: "Alice",
      surname: "Smith",
      active: "Active 10m ago",
      streetName: "Elm Street",
      streetCred: 4.8,
      username: "alicesmith789",
      password: "password3",
      email: "alice.smith@example.com",
      phone: "555-123-4567",
      address: "789 Elm Street, City, Country",
      posts: ["https://picsum.photos/536/354"],
    },
    // Add more users here
  ]);
}
