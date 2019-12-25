# Movie Ticket Booking Application

## Back-end

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

### Endpoints

#### Movies

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
	"desc": STRING, REQUIRED,
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
