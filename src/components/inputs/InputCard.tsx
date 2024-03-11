import React from 'react'

export interface InputCardProps {
  title: string
  required: boolean
  hasValue: boolean
  description?: string
}

export default function InputCard(
  props: React.PropsWithChildren<InputCardProps>
) {
  return (
    <div className="mx-1 rounded bg-white leading-tight shadow-sm dark:bg-gray-500">
      <div className="flex flex-row justify-between rounded-t bg-gray-300">
        <p className="pl-2 text-left text-xs font-bold uppercase dark:text-black">
          {props.title}
        </p>
        {props.required && !props.hasValue && (
          <p className="mr-1 h-4 w-4 font-rhr text-red-rhr">!!</p>
        )}
      </div>
      <div>{props.children}</div>
      {props.description != null && (
        <div className="justify-between rounded-t bg-gray-200">
          <p className="font-bold text-left text-s">Note</p>
          <p className="text-left text-xs">{props.description}</p>
        </div>
      )}
    </div>
  )
}
