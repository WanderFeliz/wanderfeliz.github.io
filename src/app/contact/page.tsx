import Button from '@/components/Button'
import Image from 'next/image'
import React from 'react'
import styles from './page.module.scss'


const Contact = () => {
  return (
    <div>
      <h1 className={styles.title}>Let&apos;s Keep in Touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/imgs/contact.jpg"
            alt="Contact image"
            priority
            fill={true}
            sizes="100%"
            className={styles.image}
          />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            className={styles.textArea}
            placeholder="message"
            cols={30}
            rows={10}
          ></textarea>
          <Button url="#" variant="primary-flex" text="Send"/>
        </form>
      </div>
    </div>
  )
}

export default Contact