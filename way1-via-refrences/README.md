# Way 01 - using manual references


We just put `parent_id: ObjectId(...)` in each document and uses [$graphLookup](https://docs.mongodb.com/manual/reference/operator/aggregation/graphLookup/) to query that.

# How we store the data/references in this way

> All of these refernces will be an ObjectIds

```js
[
  {
    _id: 'A',
  },
  {
    _id: 'B',
    parent_id: 'A'
  },
  {
    _id: 'C',
    parent_id: 'B'
  },
  {
    _id: 'D',
    parent_id: 'C'
  }
]
```

# To run this example locally

use the file from `./refrence_graph_data.json` and download it, then import it using [mongodb compass](https://www.mongodb.com/products/compass) 


# The .txt and .js files

The `.js` files containes the code to run the aggregation in nodejs, and the `.txt` files contains the aggregation to run in mongodb compass.

# MongoDB basics notes that I wrote

https://mohammedal-rowad.github.io/mongodb-notes/

