import React from 'react'

const NameList = () => {

    const names = [
        {
            id: 1,
            name: 'Leon Copeland',
            skill: 'Web dev'
        },
        {
            id: 2,
            name: 'Julia Chapman',
            skill: 'react'
        },
        {
            id: 3,
            name: 'Bertie Moran',
            skill: 'next'
        },
        {
            id: 4,
            name: 'Daniel Wilson',
            skill: 'angular'
        }
    ]
    return (
        <div>
            {
                names.map((id) => {
                    return (
                        <div>
                            <h1>{id.name}</h1>
                            <p>{id.skill}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default NameList