export const urls: string[] = ['https://reqres.in/api/users/2', 'http://jsonplaceholder.typicode.com/posts/1', 'https://api.mocki.io/v1/b043df5a']

export function getData() {
  const promises: Array<Promise<string>> = [];

  urls.forEach(url => {
    promises.push(
			fetch(url)
				.then(response => response.json())
    )
  })

  return Promise.all(promises)
}