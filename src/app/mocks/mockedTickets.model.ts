import { Column } from '../models/column.model'

export const InitialBoard: Column[] = [
    {
      id: 1,
      title: "To do",
      list: [ 
        {
          id: 1,
          text: "Fix bug in Done column"
        },
        {
            id: 2,
            text: 'Style ticket'
          },
          {
            id: 3,
            text: 'Add method for adding another column'
          },
          {
            id: 4,
            text: 'create color themes'
          },
 
      ]
    },
 
    {
     id: 2,
     title: 'Implementing',
     list: [ 
        {
            id: 1,
            text: 'Login method'
          },
          {
              id: 2,
              text: 'Responsive columns'
            },
            {
              id: 3,
              text: 'Softer border-radius'
            },
            {
              id: 4,
              text: 'Change font-family'
            },
 
     ]
   },
 
   {
     id: 3,
     title: 'Done',
     list: [ 
        {
            id: 1,
            text: 'Create method for new ticket'
          },
          {
              id: 2,
              text: 'Delete tickets'
            },
            {
              id: 3,
              text: 'Create models'
            },
            {
              id: 4,
              text: 'Create service'
            },
 
     ]
   }
 
]