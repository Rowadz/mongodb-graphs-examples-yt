;[
  {
    $match: {
      _id: new ObjectId('61aa30132cb3c73f19181f24'),
    },
  },
  {
    $set: {
      replies: {
        $objectToArray: '$replies',
      },
    },
  },
  {
    $set: {
      replies: {
        $filter: {
          input: '$replies',
          cond: {
            $eq: ['$$this.v.deleted', false],
          },
        },
      },
    },
  },
  {
    $set: {
      replies: {
        $arrayToObject: '$replies',
      },
    },
  },
]
