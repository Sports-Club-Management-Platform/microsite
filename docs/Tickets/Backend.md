---
sidebar_position: 2
---

### Ticket Sales

This module handles the ticket sales for a given game. It provides functions to list all available tickets, purchase tickets, and retrieve ticket information.
#### Functions

- **`post_ticket(db: Session, ticket: TicketCreate)`**
  - **Parameters:**
    - `db`: Database session
    - `ticket`: Ticket to create
  - **Returns**: Ticket created

- **`buy_ticket(db: Session, ticket: UserTicketCreate)`**
  - **Parameters:**
    - `db`: Database session
    - `ticket`: Ticket to buy
  - **Returns**: Ticket bought

- **`get_tickets_by_user_id(db: Session, user_id: int)`**
  - **Parameters:**
    - `db`: Database session
    - `user_id`: ID of the user
  - **Returns**: List of tickets ID for the user

- **`get_ticket_by_id(db: Session, ticket_id: int)`**
  - **Parameters:**
    - `db`: Database session
    - `ticket_id`: ID of the ticket
  - **Returns**: Ticket

- **`get_tickets_by_game_id(db: Session, game_id: int)`**
  - **Parameters:**
    - `db`: Database session
    - `game_id`: ID of the game
  - **Returns**: List of tickets for the game

- **`get_tickets(db: Session, skip: int = 0, limit: int = 100)`**
  - **Parameters:**
    - `db`: Database session
    - `skip`: Skip
    - `limit`: Limit
  - **Returns**: List of tickets

#### Tickets Endpoints

- **`POST /tickets`**

  - Creates a new ticket.
  - **Parameters:**
    - `ticket`: Ticket to create
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: Ticket created successfully.
    - `400 Bad Request`: If the request is invalid.

- **`POST /tickets/buy`**

  - Buys a ticket.
  - **Parameters:**
    - `ticket`: Ticket to buy
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: Ticket bought successfully.
    - `400 Bad Request`: If the request is invalid.

- **`GET /tickets/user/{user_id}`**

  - Retrieves tickets for a specific user ID.
  - **Parameters:**
    - `user_id`: ID of the user
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: List of tickets for the user.
    - `404 Not Found`: If no tickets are found for the user.

- **`GET /tickets/{ticket_id}`**

  - Retrieves a ticket by ID.
  - **Parameters:**
    - `ticket_id`: ID of the ticket
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: Ticket details.
    - `404 Not Found`: If the ticket is not found.

- **`GET /tickets/game/{game_id}`**

  - Retrieves tickets by game ID.
  - **Parameters:**
    - `game_id`: ID of the game
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: List of tickets for the game.
    - `404 Not Found`: If no tickets are found for the game.

- **`GET /tickets`**

  - Retrieves all tickets (for debug purposes).
  - **Parameters:**
    - `skip`: Number of records to skip
    - `limit`: Maximum number of records to return
    - `db`: Database session (injected by FastAPI)
  - **Responses:**
    - `200 OK`: List of tickets.
    - `400 Bad Request`: If the request is invalid.