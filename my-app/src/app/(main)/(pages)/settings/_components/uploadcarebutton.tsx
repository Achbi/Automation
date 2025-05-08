'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/file-uploader'
import { useRouter } from 'next/navigation'

type Props = {
  onUpload: (e: string) => any
}

LR.registerBlocks(LR)

const UploadCareButton = ({ onUpload }: Props) => {
  const router = useRouter()
  // Using HTMLElement as a fallback type
  const ctxProviderRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleUpload = async (e: any) => {
      const file = await onUpload(e.detail.cdnUrl)
      if (file) {
        router.refresh()
      }
    }
    
    // Using the element directly
    const element = ctxProviderRef.current
    if (element) {
      element.addEventListener('file-upload-success', handleUpload)
      
      // Clean up event listener on unmount
      return () => {
        element.removeEventListener('file-upload-success', handleUpload)
      }
    }
  }, [onUpload, router])

  return (
    <div>
      {/* @ts-ignore */}
      <lr-config
        ctx-name="my-uploader"
        pubkey="a9428ff5ff90ae7a64eb"
      />
      
      {/* @ts-ignore */}
      <lr-file-uploader-regular
        ctx-name="my-uploader"
        css-src="https://cdn.jsdelivr.net/npm/@uploadcare/file-uploader@1.0.0/web/lr-file-uploader-regular.min.css"
      />
      
      {/* @ts-ignore */}
      <lr-upload-ctx-provider
        ctx-name="my-uploader"
        ref={ctxProviderRef}
      />
    </div>
  )
}

export default UploadCareButton