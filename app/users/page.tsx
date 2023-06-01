import UsersList from '@/app/users/list';
import { IUser } from '@/types/user';
import Link from 'next/link';

const fetchUsers = async (): Promise<IUser[]> => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/users`)

	if (!res.ok) {
		throw new Error("failed to fetch data")
	}

	return res.json()
}

const UsersPage = async () => {
	const users = await fetchUsers()

	return (
		<div>
			<h1>Users page</h1>
			<Link href={"/"}>Home</Link>

			<div>
				<UsersList users={users}/>
			</div>
		</div>
	)
}

export default UsersPage;
