const Request = async ({url, method, body }: RequestI) => {
    return await fetch(url, {method});
}

export default Request

interface RequestI {
    url: string,
    method: string,
    body: object
}