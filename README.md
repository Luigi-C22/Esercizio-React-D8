# Esercizio-React-D8

Continuiamo a lavorare su EPICBOOKS

Ricorda di installare il pacchetto npm i react-router-dom

Crea una rotta per l'homepage dell'applicazione: dovrebbe puntare a "/" e caricare il componente LatesteRelease

Crea un componente NotFound, dovrebbe venire renderizzato ogni volta che l'utente naviga su una rotta non gestita.

Crea una rotta per un nuovo componente BookDetails. Questa rotta deve passare un parametro ASIN tramite useParams

Aggiungi un pulsante in ogni SingleBook per poter navigare a questa nuova rotta dinamica e caricare BookDetails.

Crea infine il componente BookDetails, che recupererà il parametro ASIN dall'url e caricherà i dettagli e le recensioni del libro su cui si è cliccato. Per recuperare le informazioni del libro selezionato, usa la state elevation.

API e Autenticazione Il tuo endpoint per tutto il CRUD si trova su:

https://striveschool-api.herokuapp.com/api/comments/

Ciò significa che puoi effettuare operazioni di GET, DELETE, POST e PUT.

!! IMPORTANTE !! Per utilizzare l'endpoint avrai bisogno di un header di autenticazione. Puoi ottenerne uno, insieme ad un esempio su come implementarlo, su https://strive.school/studentlogin

API - Struttura di un commento + AVVERTENZA!

{ "comment": string //testo della recensione "rate": string, //valore compreso tra 1 e 5 "elementId": string //l'identificativo ASIN del libro }

ATTENZIONE!! Facendo un'operazione di GET su https://striveschool-api.herokuapp.com/api/comments/ riceverai TUTTE le recensioni presenti nel database. Probabilmente quello che a te interessa maggiormente sono le recensioni relative ad un singolo libro: puoi ottenerli aggiungendo l'ASIN del libro al tuo endpoint:

https://striveschool-api.herokuapp.com/api/comments/:elementId

ES: https://striveschool-api.herokuapp.com/api/comments/0316438960
