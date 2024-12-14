"use client"
import React from 'react'
import FormSection from '../_components/FormSection'
import OutputSection from '../_components/OutputSection'
import Templates from '@/app/(data)/Templates'
import { TEMPLATE } from '../../_components/TemplateListSection'

interface PROPS {
  params :{
    'templateSlug': string
  }
}

function CreateNewContent(props: PROPS) {
  const selectedTemplate : TEMPLATE | undefined = Templates?.find((item) => item.slug == props.params['templateSlug'])
  const GenerateAIContent =(formData:any)=>{

  }

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
      <FormSection selectedTemplate={selectedTemplate} useFormInput={(v:any)=>GenerateAIContent(v)}/>
      <div className='col-span-2'>
      <OutputSection/>
        </div>
    </div>
  )
}

export default CreateNewContent