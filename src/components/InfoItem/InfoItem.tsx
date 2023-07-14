import styles from './InfoItem.module.scss';

export interface InfoItemProps { 
  icon: React.ReactNode,
  text?: string | null,
  isLink?: boolean,

}

export const InfoItem = ({ icon,text,isLink}: InfoItemProps) => {
  const currentText = text || 'Not Available'
  let currentHref= '';

  if(isLink){
    currentHref = text && text.startsWith('http') ? text : `https://${text}`;
  }
  return(
    <div className={`${styles.infoItem} ${text ? '' : ` ${styles.empty}`}`}>
      {icon}
      <div>
        {isLink && text ? (
          <a
          href={currentHref}
          target='_blank' rel="noreferrer"
          className={styles.link}
          >
            {currentText}
          </a>
        ) : currentText}
      </div>
    </div>
  )
};
