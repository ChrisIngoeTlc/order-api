#order-api
ThomsonLocal RESTful API for order based interactions with internal processes.

##Current Version
This API is currently running at 1.0.0

##Encryption
There is no encryption on this API service.

#API Reference
##Example HTTP Request Header
GET http://[HOST]/Order/NewNumber HTTP/1.1

Host: [HOST]

accept-version: 1.0.0

##Example New Order Number GET Request
`GET http://[HOST]/Order/NewNumber HTTP/1.1`

##Successful Response
`{"order_no":100001555}`

