import React from "react";
import styles from './users.module.css';

const Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://storage.googleapis.com/afs-prod/media/758b0ac604a54b368cfdf5cfd76298f7/800.jpeg',
                followed: true,
                fullName: 'Valentin',
                status: 'I am a great',
                location: {city: 'Kharkov', country: 'Ukraine'}
            },
            {
                id: 2,
                photoUrl: 'https://storage.googleapis.com/afs-prod/media/758b0ac604a54b368cfdf5cfd76298f7/800.jpeg',
                followed: false,
                fullName: 'Ivan',
                status: 'Hello',
                location: {city: 'Moscow', country: 'Russia'}
            },
            {
                id: 3,
                photoUrl: 'https://storage.googleapis.com/afs-prod/media/758b0ac604a54b368cfdf5cfd76298f7/800.jpeg',
                followed: true,
                fullName: 'Paulo',
                status: 'Ragazzi',
                location: {city: 'Torino', country: 'Italy'}
            }
        ]);
    }

    return <div>
        {
            props.users.map((user) => <div key={user.id}>
                <span>
                    <div>
                        <img src={user.photoUrl} className={styles.userPhoto}/>
                    </div>

                    <div>
                        {user.followed ?
                            <button onClick={() => {
                                props.unfollow(user.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                        <div>{user.location.country}</div>
                        <div>{user.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
};

export default Users;