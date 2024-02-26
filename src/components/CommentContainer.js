import React from 'react'
import CommentList from './CommentList'
const comments=[
    {
        name:'Jewel Thomas',
        comment:'I love this video',
        replies:[
            {
                name:'Kashish Thomas',
                comment:'I love this video',
                replies:[
                    {
                        name:'Jewel Thomas',
                        comment:'I love this video',
                        replies:[]
                    }
                ]
            }
        ]
    },
    {
        name:'Kashish Thomas',
        comment:'I love this video',
        replies:[]
    },
    {
        name:'Madhav Dureja',
        comment:'I love this video',
        replies:[{
            name:'Kashish Thomas',
            comment:'I love this video',
            replies:[{
                name:'Jewel Thomas',
                comment:'I love this video',
                replies:[{
                    name:'Madhav Dureja',
                    comment:'I love this video',
                    replies:[]
                }]
            
            }]
        }]
    },
    {
        name:'Peehu',
        comment:'goood video',
        replies:[]
    },
    {
        name:'Peehu',
        comment:'goood video',
        replies:[]
    },
    {
        name:'Peehu',
        comment:'goood video',
        replies:[]
    },
    {
        name:'Peehu',
        comment:'goood video',
        replies:[]
    },
    {
        name:'Peehu',
        comment:'goood video',
        replies:[]
    }
]
const CommentContainer = () => {
  return (
    <div className='p-5 mx-5 bg-gray-50 w-2/3'>
        <h2 className='text-bold text-2xl'>Comments:</h2>
        <CommentList comments={comments}/>
    </div>
  )
}

export default CommentContainer