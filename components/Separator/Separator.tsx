import Image from 'next/image'
import st from './Separator.module.css'

import SeparatorImage from '@/assets/common/hr.svg'

export const Separator = () => {
  return (
    <div className={st.separator}>
      <Image alt="hr" src={SeparatorImage} />
    </div>
  )
}
