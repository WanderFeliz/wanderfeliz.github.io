import Image from 'next/image'
import React from 'react'
import styles from './footer.module.scss'

const Footer = () => {
  return (
    <div className={styles.container}>
        <div>©2023 Wander Paniagua. All rights reserved.</div>
        <div className={styles.social}>
          <Image src="/imgs/li.png" width={20} height={20} className={styles.icon} alt="Linkedin icon"/>
          <Image src="/imgs/github.png" width={20} height={20} className={styles.icon} alt="GitHub icon"/>
        </div>
    </div>
  )
}

export default Footer