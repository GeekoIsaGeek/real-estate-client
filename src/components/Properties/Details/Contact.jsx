import React from 'react';
import styles from './Property.module.scss';
import { BsFillPersonFill } from 'react-icons/bs';
import { MdPhoneAndroid } from 'react-icons/md';

const Contact = () => {
	const { publisher, number } = { publisher: 'თიკო გორგიშელი', number: '527367763' };
	return (
		<div className={styles.ContactToPublisher}>
			<div className={styles.Publisher}>
				<h3>
					<BsFillPersonFill /> {publisher}
				</h3>
				<h4>
					<MdPhoneAndroid />
					{number}
				</h4>
			</div>
			<input className={styles.SenderName} placeholder='სახელი'></input>
			<input className={styles.SenderPhone} placeholder='ტელეფონი'></input>
			<input className={styles.SenderEmail} placeholder='ელ-ფოსტა'></input>
			<textarea className={styles.SenderMessage} placeholder='ტექსტი'></textarea>
			<button>გაგზავნა</button>
		</div>
	);
};

export default Contact;
