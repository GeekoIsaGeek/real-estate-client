import React from 'react';
import styles from './Property.module.scss';
import { AiFillCar } from 'react-icons/ai';
import { FaBath } from 'react-icons/fa';
import { MdMeetingRoom } from 'react-icons/md';
import { GiHomeGarage } from 'react-icons/gi';
import { AiTwotoneCalendar } from 'react-icons/ai';

const Details = ({ data }) => {
	const { parking, bathroom, room, garage } = data.details;
	const dateAdded = data.createdAt.substring(0, 10);

	return (
		<div className={styles.Details}>
			<h3>დეტალები</h3>
			<ul>
				<li>
					<AiFillCar /> {parking}
				</li>
				<li>
					<FaBath />
					{bathroom}
				</li>
				<li>
					<MdMeetingRoom /> {room}
				</li>
				<li>
					<GiHomeGarage /> {garage}
				</li>
				<li>
					<AiTwotoneCalendar />
					{dateAdded}
				</li>
			</ul>
		</div>
	);
};

export default Details;
