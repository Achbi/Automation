'use client'
import react from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
type props = {};


 
const WorkflowButton = (props: props) => {
    return(
        <Button size ={'icon'}
        onClick={handleClick}
        >
            <Plus/>

        </Button>
    )
}