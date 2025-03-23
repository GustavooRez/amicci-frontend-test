const Request = async ({url, method, body }: RequestI) => {
    const response = await fetch(url, {method});
    return response.json()
}

export default Request

interface RequestI {
    url: string,
    method: string,
    body: object
}