import st from './Modal.module.css'

type ModalProps = {
  children: React.ReactNode
  className?: string
  label: string
  value: string
}

export const Modal = ({ children, className, label, value }: ModalProps) => {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
