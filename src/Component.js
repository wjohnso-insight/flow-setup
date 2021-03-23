// @flow 
import * as React from 'react'

type Props = {
    someProp: number,
}

export default function Component(props: Props) : React.Node {
    return (
        <div>
            {props.someProp}
        </div>
    )
}
