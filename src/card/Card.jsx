import profilePic from './assets/profile.jpg';
import styles from './Card.module.css';

function Card(){
    return(
        <div className={styles.card}>
            <img className={styles.cardImage} src={profilePic} alt="profile picture"></img>
            <h2 className={styles.cardTitle}>Joy Xiang</h2>
            <p className={styles.cardText}>I'm a student at the University of Rochester and I am currently studying finance and computer science.</p>
        </div>
    );
}

export default Card