import UserProfile from '@/app/users/[userId]/profile';
import { IUser } from '@/types/user';
import { notFound } from 'next/navigation';

const fetchUser = async (id: string): Promise<IUser | undefined> => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

	if (!res.ok) {
		return undefined;
	}

	return res.json()
}

interface IProps {
	params: {
		userId: string
	}
}

const UserPage = async ({params}: IProps) => {
	const user = await fetchUser(params.userId)

	if (!user || !user.id) {
		notFound();
		return;
	}

	return (
		<UserProfile user={user}></UserProfile>
	);
}

export default UserPage;
