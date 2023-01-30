import { useState } from 'react'
import { createPortal } from 'react-dom'
import st from './Modal.module.css'

type ModalProps = {
  children: React.ReactNode
  className?: string
  copiedNotice: string
  copyButton: string
  closeButton: string
  label: string
  value: string
}

export const Modal = ({ children, className, copiedNotice, copyButton, closeButton, label, value }: ModalProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const open = () => {
    setIsOpen(true)
  }

  const close = () => {
    setIsOpen(false)
    setCopied(false)
  }

  const copy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
  }

  return (
    <>
      <div onClick={open} className={className}>
        {children}
      </div>
      {isOpen && createPortal((
        <div className={st.modalOverlay}>
          <div className={st.modal}>
            <div className={st.modalX} onClick={close}>✖</div>
            <div className={st.modalContent}>{label}</div>
            {copied && (
              <div className={st.copiedNotice}>{copiedNotice}</div>
            )}
            <div className={st.modalButtons}>
              <div className={st.copyButton} onClick={copy}>{copyButton}</div>
              <div className={st.closeButton} onClick={close}>{closeButton}</div>
            </div>
          </div>
        </div>
      ), document.body)}
    </>
  )
}
