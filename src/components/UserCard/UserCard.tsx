import { UserStat } from 'components/UserStat';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from 'types';
import { UserTitle } from 'components/UserTitle';
import { UserInfo } from 'components/UserInfo';

interface UserCardProps extends LocalGithubUser{ }

export const UserCard = (props: UserCardProps) => {

  return(
    <div className={styles.userCard}>
      <img 
      src={props.avatar} 
      alt={props.login} 
      className={styles.avatar}
       />
      <UserTitle
      created={props.created}
      login={props.login}
      name={props.name}
      />
      <p className={`${styles.bio} ${props.bio? '' : ` ${styles.empty}`}`}>
        {props.bio || 'This profile has no bio'}
      </p>
      <UserStat
      repos={props.repos}
      followers={props.followers}
      following={props.following}
      />
      <UserInfo 
      blog={props.blog}
      company={props.company}
      location={props.location}
      twitter={props.twitter}
      />
  </div>
  )
};
