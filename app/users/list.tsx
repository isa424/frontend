'use client';

import { IUser } from '@/types/user';
import Link from 'next/link';
import { MouseEventHandler, useState } from 'react';

type IProps = {
	users: IUser[]
}

const UsersList = ({users}: IProps) => {
	const [list, setList] = useState<IUser[]>(users)

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		e.preventDefault()
		setList([...list.slice(1)])
	}

	return (
		<>
			<h2>Users:</h2>
			<div>
				<button className={"bg-blue-400 border rounded shadow-md p-1 text-white"} onClick={handleClick}>Remove</button>
			</div>
			<ul>
				{list.map((u, i) => (
					<li key={i}>
						<Link href={`/users/${u.id}`}>{u.username}</Link>
					</li>
				))}
			</ul>
		</>
	)
}

export default UsersList;
