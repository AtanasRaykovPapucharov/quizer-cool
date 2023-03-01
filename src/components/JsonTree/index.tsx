/**
 * Transform JSON to <ul> Tree
 * 
 * @param json : {} | JSON
 * 
 * @returns React Element - Tree
 * 
 */

import React, { ReactNode } from 'react'
import Link from 'next/link'
import { useAppDispatch } from '../../redux/hooks/useAppDispatch'
import { action } from '../../redux/action'
import { ActionType } from '../../redux/action/type'

type Node = {
    title: string, 
    value: string, 
    children: {}[]
}

function JsonTree(json: {} | string): ReactNode {  
    const dispatch = useAppDispatch() 

    const objectToArray: any = (obj: any) => {
        const nodes: Node[] = []

        if(typeof json === 'string') json = JSON.parse(json)

        for(let item in obj) {
            if (typeof obj[item] === 'string') {
                nodes.push({ title: item, value: obj[item], children: [] })
            } else {
                nodes.push({ title: item, value: '', children: objectToArray(obj[item]) })
            }
        }

        return nodes
    }

    const onClickCaret = (e: any) => {
        const target = e.target

        target.parentElement.querySelector('.nested').classList.toggle('active')
        target.classList.toggle('caret-down')
    }

    const onClickLink = (e: any) => {
        const target = e.target

        dispatch(action(ActionType.IS_MENU_CLOSED))
        dispatch(action(ActionType.SET_ROUTE, target.innerText))
    }
    
    const renderNodes = (nodesArray: any) => {
        return nodesArray.map((node: any, i: number) => <li key={i}>
            {
                node.children.length > 0 ?
                <>
                    <span className='caret' onClick={onClickCaret}>
                        {node.title}
                    </span>
                    <ul className='nested'>
                        {renderNodes(node.children)}
                    </ul>
                </> :
                <>
                    <span>{"‣ "}</span>
                    <Link href={node.value} onClick={onClickLink}>
                        {node.title}
                    </Link>
                </>
            }
        </li> )
    }

    return (
        <ul id="ul-tree">
            {renderNodes(objectToArray(json))}
        </ul>
    )
} 

export default JsonTree
