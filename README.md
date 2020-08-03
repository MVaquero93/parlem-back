# parlem-back


Customer table:
```{
    "_id" : ObjectId("5f25f13e23ecc81bf8b603f5"),
    "docType" : "nif",
    "docNum" : "11223344E",
    "email" : "it@parlem.com",
    "givenName" : "Enriqueta",
    "familyName1" : "Parlem",
    "phone" : "668668668",
    "subscribedProducts" : [ 
        ObjectId("5f25f23a2eefb6039802f26e"), 
        ObjectId("5f25f23a2eefb6039802f26f"), 
        ObjectId("5f25f23a2eefb6039802f270")
    ],
    "createdAt" : ISODate("2020-08-01T22:48:30.283Z"),
    "updatedAt" : ISODate("2020-08-01T22:48:30.283Z"),
    "__v" : 0
}

Product table:

{
    "_id" : ObjectId("5f25f23a2eefb6039802f26e"),
    "productName" : "FIBRA 1000 ADAMO",
    "productTypeName" : "ftth",
    "numeracioTerminal" : 933933933,
    "soldAt" : ISODate("2019-01-09T13:26:17.000Z"),
    "createdAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "updatedAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "__v" : 0
}

{
    "_id" : ObjectId("5f25f23a2eefb6039802f26f"),
    "productName" : "FIBRA 500 TEST",
    "productTypeName" : "ftth",
    "numeracioTerminal" : 933933933,
    "soldAt" : ISODate("2019-01-10T13:26:17.000Z"),
    "createdAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "updatedAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "__v" : 0
}


{
    "_id" : ObjectId("5f25f23a2eefb6039802f270"),
    "productName" : "FUTBOL TV CHAMPIONS",
    "productTypeName" : "ftball",
    "numeracioTerminal" : 933933933,
    "soldAt" : ISODate("2019-01-06T13:26:17.000Z"),
    "createdAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "updatedAt" : ISODate("2020-08-01T22:52:42.837Z"),
    "__v" : 0
}
