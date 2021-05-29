const datos = async () => {
    const data = await fetch('http://jsonplaceholder.typicode.com/posts').then((res) => res.json());
    return data;
};

export default datos;
