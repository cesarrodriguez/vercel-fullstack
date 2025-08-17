useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/hello`)
    .then(res => res.jason())
    .then(data => console.log(data))
},[]);