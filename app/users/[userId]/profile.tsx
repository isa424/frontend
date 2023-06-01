'use client';

import { IUser } from '@/types/user';
import { useRouter } from 'next/navigation';

interface IProps {
	user: IUser
}

const UserProfile = ({user}: IProps) => {
	const router = useRouter()

	return (
		<div>
			<h1>User page</h1>
			<div>
				<button onClick={() => router.back()}>Go back</button>
				{/*<Link href={'/users'}>Go back</Link>*/}
			</div>
			<div>ID: {user.id}</div>
			<div>Username: {user.username}</div>
			<div>Email: {user.email}</div>
			<div>Phone: {user.phone}</div>
		</div>
	)
}

export default UserProfile;
