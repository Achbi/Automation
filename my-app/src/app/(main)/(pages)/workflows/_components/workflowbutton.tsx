'use client'
import react from 'react'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
type props = {};


  const handleClick = () => {
    setOpen(
      <CustomModal
        title="Create a Workflow Automation"
        subheading="Workflows are a powerfull that help you automate tasks."
      >
        <Workflowform />
      </CustomModal>
    )
  }
const WorkflowButton = (props: props) => {
    return(
        <Button size ={'icon'}
        onClick={handleclick}
        >
            <Plus/>

        </Button>
    )
}