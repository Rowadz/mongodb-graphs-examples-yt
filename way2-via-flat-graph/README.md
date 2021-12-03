# Way 02 - using a "flat" graph

We put a `key:value` object on the document with a list of references to find the direct children and keep repeating this pattern.

# How we store the data/references in this way

> All of these refernces will be an ObjectIds

```js
  {
    _id: 'A',
    direct_replies: ['B', 'C'],
    replies: {
        B: {
            _id: B,
            direct_replies: ['D'],
        },
        C: {
            _id: C,
        },
        D: {
            _id: D,
            direct_replies: ['E'],
        },
        E: {
            _id: E
        }
    }
  }
```

# To run this example locally

use the file from `./flat_graph_data.json` and download it, then import it using [mongodb compass](https://www.mongodb.com/products/compass) 


# The .txt and .js files

The `.js` files containes the code to run the aggregation in nodejs, and the `.txt` files contains the aggregation to run in mongodb compass.

# MongoDB basics notes that I wrote

https://mohammedal-rowad.github.io/mongodb-notes/


# To handle soft delete 

We can just mark all the children in the graph as deleted, then use [$objectToArray](https://docs.mongodb.com/manual/reference/operator/aggregation/objectToArray/) and [$arrayToObject](https://docs.mongodb.com/manual/reference/operator/aggregation/arrayToObject/) to filter the object from deleted objects.