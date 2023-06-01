const request = <T>(url: string, options: RequestInit) => {
	return fetch(url, options) as Promise<T>
}
