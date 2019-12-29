# Movie Ticket Booking Application

## Sections

- [Run](#run-server)
- [Testing api](#testing-api)
- [Endpoints](#endpoints)

## Endpoints

- [Movies](#movies)
- [Rooms](#rooms)
- [Seats](#seats)
- [Users](#users)
- [Login](#login)
- [Movie Screenings](#movie-screenings)

---

### Run server:

`nodemon index.js`

### Testing api: (Default: http://localhost:3000)

1. Run `MongoDB Compass`.
2. Run `Postman` or any other app.
3. Select the type of request (`POST, PUT, GET, DELETE`).
4. Add body to `POST/PUT` request.
5. Add headers

```
"Content-Type": "application/json"
```

6. If you use [REST Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VS Code, open file `api.rest` and testing api.

#### Movies

---

1. GET

```
All movies:
http://localhost:3000/api/movies/

Single movie:
http://localhost:3000/api/movies/{movies_id}

```

2. POST

```
http://localhost:3000/api/movies/

{
	"title": STRING, REQUIRED,
	"desc": STRING, REQUIRED,,
	"category": ARRAY, REQUIRED,
	"duration": NUMBER, REQUIRED,
	"premiere": DATE, REQUIRED,
	"director": ARRAY, REQUIRED,
    "image": STRING
}
```

3. PUT

```
http://localhost:3000/api/movies/{movies_id}

{
	"title": STRING, REQUIRED,
	"desc": STRING, REQUIRED,
	"category": ARRAY, REQUIRED,
	"duration": NUMBER, REQUIRED,
	"premiere": DATE, REQUIRED,
	"director": ARRAY, REQUIRED,
    "image": STRING
}
```

4. DELETE

```
http://localhost:3000/api/movies/{movies_id}
```

---

#### Rooms

---

1. GET

```
All rooms:
http://localhost:3000/api/rooms/

Single room:
http://localhost:3000/api/rooms/{room_id}

```

2. POST

```
http://localhost:3000/api/rooms/

{
	"name": STRING, REQUIRED,
	"desc": STRING, REQUIRED,
	"seatsAvailable": NUMBER, REQUIRED
}
```

3. PUT

```
http://localhost:3000/api/rooms/{rooms_id}

{
	"name": STRING, REQUIRED,
	"desc": STRING, REQUIRED,
	"seatsAvailable": NUMBER, REQUIRED
}
```

4. DELETE

```
http://localhost:3000/api/rooms/{rooms_id}
```

---

#### Seats

---

1. GET

```
All seats:
http://localhost:3000/api/rooms/{room_id}/seats

Single seat:
http://localhost:3000/api/rooms/{room_id}/seats/{seat_id}

```

2. POST

```
http://localhost:3000/api/rooms/{room_id}/seats

{
	"num": NUMBER, REQUIRED,
	"row": STRING, REQUIRED,
	"checked": BOOLEN, REQUIRED
}
```

3. PUT

```
http://localhost:3000/api/rooms/{rooms_id}/seats/{seat_id}

{
	"num": NUMBER, REQUIRED,
	"row": STRING, REQUIRED,
	"checked": BOOLEN, REQUIRED
}
```

4. DELETE

```
http://localhost:3000/api/rooms/{rooms_id}/seats/{seat_id}
```

---

### Users

---

1. GET

```
All users:
http://localhost:3000/api/users

Single user:
http://localhost:3000/api/users/{user-id}
```

2. POST

```
http://localhost:3000/api/users

{
	"name": STRING, REQUIRED
	"lastname": STRING, REQUIRED
	"email": STRING, REQUIRED, UNIQUE
	"password": STRING, REQUIRED
}
```

3. PUT

```
http://localhost:3000/api/users/{user_id}

{
	"name": STRING, REQUIRED
	"lastname": STRING, REQUIRED
	"email": STRING, REQUIRED, UNIQUE
	"password": STRING, REQUIRED
}
```

4. DELETE

```
http://localhost:3000/api/users/{user_id}
```

---

### Login

---

1. POST

```
http://localhost:3000/api/login

{
	"email": STRING, REQUIRED
	"password": STRING, REQUIRED
}
```

---

### MOVIE SCREENINGS

---

1. GET

```
All movie shows
http://localhost:3000/api/screenings

Movie shows by movie Title
http://localhost:3000/api/screenings?shows={Film Title}
EG: http://localhost:3000/api/screenings?shows=New Film 4

Movie shows by date
http://localhost:3000/api/screenings?day={YYYY-MM-DD}
EG: http://localhost:3000/api/screenings?day=2019-12-27

Movie shows by room
http://localhost:3000/api/screenings?room={Room Name}
EG: http://localhost:3000/api/screenings?room=Room 2

Movie shows by date and name
http://localhost:3000/api/screenings?day={YYYY-MM-DD}&shows={Film Title}
EG: http://localhost:3000/api/screenings?day=2019-12-25&shows=New Film 4
```

2. POST

```
http://localhost:3000/api/screenings

{
	"movie": STRING, REQUIRED, MOVIE ID
	"room": STRING, REQUIRED, ROOM ID
	"dateTime": DATE, REQUIRED, FORMAT: "YYYY=MM-DDTHH:MM" EG. "2019-12-27T15:00"
}
```

3. PUT

```
http://localhost:3000/api/screenings/{show_id}

{
	"movie": STRING, REQUIRED, MOVIE ID
	"room": STRING, REQUIRED, ROOM ID
	"dateTime": DATE, REQUIRED, FORMAT: "YYYY-MM-DDTHH:MM" EG. "2019-12-27T15:00"
}
```

4. DELETE

```
http://localhost:3000/api/screenings/{show_id}
```
---

### Tickets

---

1. GET

```
All tickets
http://localhost:3000/api/ticket

Single ticket:
http://localhost:3000/api/ticket/{ticket_id}
```

2. POST

```
http://localhost:3000/api/ticket

{
	"name": STRING, REQUIRED
	"lastname": STRING, REQUIRED
	"movie": STRING, REQUIRED
	"showTime": DATE, REQUIRED, FORMAT: "YYYY-MM-DDTHH:MM" EG. "2019-12-27T15:00"
	"seat": STRING, REQUIRED, UNIQUE
	"price": NUMBER, REQUIRED
	"ticketType": STRING, ENUM['Normalny','Ulgowy','Grupowy']
}
```

3. PUT


```
http://localhost:3000/api/ticket/{ticket_id}

{
	"name": STRING, REQUIRED
	"lastname": STRING, REQUIRED
	"movie": STRING, REQUIRED
	"showTime": DATE, REQUIRED, FORMAT: "YYYY-MM-DDTHH:MM" EG. "2019-12-27T15:00"
	"seat": STRING, REQUIRED, UNIQUE
	"price": NUMBER, REQUIRED
	"ticketType": STRING, ENUM['Normalny','Ulgowy','Grupowy']
}
```

4. DELETE

```
http://localhost:3000/api/ticket/{ticket_id}
```
